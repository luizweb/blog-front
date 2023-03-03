import {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../contexts/authContext';
import api from '../api/api.js';
import transformImage from "../utils/TransformImage.js";
import { FiSend } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';


function Comment({postId, setReload, reload}) {
    const { loggedInUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [reloadComment, setReloadComment] = useState(false);
    const [comments, setComments] = useState({});

    const [form, setForm] = useState({
        postId: postId,
        commenter: loggedInUser.user._id,
        comment: ""
    })

    useEffect(()=>{
        async function fetchComments(){
            try {
                const response = await api.get(`/comment/${postId}`);
                setComments(response.data);
                setIsLoading(false); 
            } catch (error) {
                console.log(error);
            }
        };
        fetchComments();
    },[postId, reloadComment]);

    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
        
    };

    async function handleSubmit(e){
        e.preventDefault();
        
        if (document.getElementById("comment").value.trim().length < 2) {
            return
        }

        if (document.getElementById("comment").value.trim() === "") {
            return
        }

        try {
            await api.post("/comment/add", form);
            setReloadComment(!reloadComment);
            setReload(!reload);

            setForm({
                postId: postId,
                commenter: loggedInUser.user._id,
                comment: ""
            })
        } catch (error) {
            console.log(error)
        } 
    };

    async function handleDelete(postId, userId, commentId){
        try {
            const deleteParams = {"postId": postId, "userId": userId, "commentId": commentId}
            await api.put('/comment/delete', deleteParams);
            setReloadComment(!reloadComment);
            setReload(!reload);
        } catch (error) {
            console.log(error)
        } 

    }

    return ( 
        <>
        

        {!isLoading && (
            <>
                {/* <!-- Comments section--> */}
                <section className="mb-5">
                    <div className="card bg-light">
                        <div className="card-body">
                            {/* <!-- Comment form--> */}
                            
                                    
                                    <form className="mb-4">
                                        <div className='d-flex justify-content-end align-items-end'>
                                            <textarea id="comment" className="form-control" rows="3" placeholder="Participe da discussão e deixe um comentário!" name="comment" onChange={handleChange} required>                                
                                            </textarea>
                                            
                                            
                                            <FiSend className="fs-3 text-black ms-2" onClick={handleSubmit} style={{cursor:"pointer"}}/>
                                                
                                            
                                        </div>
                                    </form>
                                   
                            
                            
                            {/* <!-- Comment with nested comments--> */}
                            
                                
                                {
                                    comments.map((comment) => {                
                                                                            
                                        return (
                                            <div className="d-flex mb-4" key={comment._id}>
                                            {/*  <!-- Parent comment--> */}
                                                <div className="flex-shrink-0">
                                                <img src={transformImage(comment.commenter.profilePic, "ar_1:1,c_fill,g_auto,r_max,w_300")} alt="profile-pic" height="40px"/>
                                                </div>
                                                
                                                <div className="ms-3">
                                                    <div className="fw-bold">{comment.commenter.name}</div>
                                                    {comment.comment} 
                                                    
                                                    {loggedInUser.user._id === comment.commenter._id && (
                                                        <AiOutlineDelete className="fs-5 text-danger ms-2" onClick={()=>{handleDelete(postId, loggedInUser.user._id, comment._id)}}/> 
                                                    )}
                                                    

                                                    {/* <!-- Child comment 1--> */                                                        
                                                        comment.reply.map((reply)=>{
                                                            return (
                                                                
                                                                    
                                                                    <div className="d-flex mt-4" key={reply._id}>
                                                                        <div className="flex-shrink-0">
                                                                            <img src={transformImage(reply.commenter.profilePic, "ar_1:1,c_fill,g_auto,r_max,w_300")} alt="profile-pic" height="40px"/>
                                                                        </div>
                                                                        <div className="ms-3">
                                                                            <div className="fw-bold">{reply.commenter.name}</div>
                                                                            {reply.comment}
                                                                        </div>
                                                                    </div>
                                                                
                                                            )
                                                        })
                                                    }
                                                    
                                                    
                                                </div>                                                
                                            </div>                     
                                            
                                        )
                                    })
                                }
                                
                                
                                
                            
                        </div>
                    </div>
                </section>
            </>
        
        )}
        </>
     );
}

export default Comment;