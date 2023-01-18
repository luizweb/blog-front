import {useState, useEffect} from 'react';
import api from '../api/api.js';

function Comment({postId}) {
    
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState({});

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
    },[postId]);

    

    return ( 
        <>
        {!isLoading && (
            <>
                {/* <!-- Comments section--> */}
                <section className="mb-5">
                    <div className="card bg-light">
                        <div className="card-body">
                            {/* <!-- Comment form--> */}
                            <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                            
                            {/* <!-- Comment with nested comments--> */}
                            
                                
                                {
                                    comments.map((comment) => {                
                                                                            
                                        return (
                                            <div className="d-flex mb-4" key={comment._id}>
                                            {/*  <!-- Parent comment--> */}
                                                <div className="flex-shrink-0">
                                                    <img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
                                                </div>
                                                
                                                <div className="ms-3">
                                                    <div className="fw-bold">{comment.commenter}</div>
                                                    {comment.comment}
                                                    

                                                    {/* <!-- Child comment 1--> */                                                        
                                                        comment.reply.map((reply)=>{
                                                            return (
                                                                
                                                                    
                                                                    <div className="d-flex mt-4" key={reply._id}>
                                                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                                        <div className="ms-3">
                                                                            <div className="fw-bold">{reply.commenter}</div>
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