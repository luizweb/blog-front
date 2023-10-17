import {useState, useEffect} from 'react';
import { shortDate } from '../utils/TransformDate.js';
import api from '../api/api.js';

function AdminPostPage() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const [posts, setPosts] = useState([]);
    const [postsnotactive, setPostsnotactive] = useState([]);

    useEffect(()=>{
        async function fetchPosts(){
            try {
                //const response = await api.get("/post");
                const [response, responseNotactive] = await Promise.all([
                    api.get("/post"),
                    api.get("/post/notactive"),
                  ]);

                setPosts(response.data);
                setPostsnotactive(responseNotactive.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    },[reload]);

    async function handleDelete(id){
        try {
            await api.delete(`post/delete/${id}`)
            setReload(!reload);
        } catch (error) {
            console.log(error);
        }
    };

    async function handleActive(postId, activate){
        try {
                
            const activeParams = {"postId": postId, "activate": activate}
            await api.put('/post/active', activeParams);
            setReload(!reload);
        } catch (error) {
            console.log(error);
        }
    };
    
    
    
    return ( 
        <>
        {!isLoading && (
        
        <>
                
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 mb-5">
                    <h4 className="mb-3">Postagens</h4>
                    
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Data</th>
                            <th scope="col">Título</th>
                            <th scope="col">Resumo</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Bookmarks</th>
                            <th scope="col">Comentários</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                posts.map((post, index) => {                                    
                                                                      
                                    return (

                                        <tr key={post._id}>
                                            <th scope="row">{index}</th>
                                            <td>{shortDate(post.createdAt.toString())}</td>
                                            <td className="fw-bold">{post.title.slice(0,40)}</td>
                                            <td>{post.summary.slice(0,40)}</td>
                                            <td>{post.likes.length}</td>
                                            <td>{post.savedPosts.length}</td>
                                            <td>{post.comments.length}</td>
                                            <td><img src="https://cdn-icons-png.flaticon.com/512/889/889727.png" alt="activate" height="30px" style={{cursor: "pointer"}} onClick={()=>{handleActive(post._id, false)}} /></td>
                                            <td><img src="https://cdn-icons-png.flaticon.com/512/3177/3177433.png" alt="delete" height="25px" style={{cursor: "pointer"}} onClick={()=>{handleDelete(post._id)}}/></td>
                                        </tr> 

                                    )
                                })
                            }
                            
                            
                            
                        </tbody>
                    </table>
                    <br></br>
                    <hr></hr>
                    <h4 className="mb-3">Inativos</h4>
                    
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Data</th>
                            <th scope="col">Título</th>
                            <th scope="col">Resumo</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Bookmarks</th>
                            <th scope="col">Comentários</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                postsnotactive.map((post, index) => {                                    
                                                                      
                                    return (

                                        <tr key={post._id}>
                                            <th scope="row">{index}</th>
                                            <td>{shortDate(post.createdAt.toString())}</td>
                                            <td className="fw-bold">{post.title.slice(0,40)}</td>
                                            <td>{post.summary.slice(0,40)}</td>
                                            <td>{post.likes.length}</td>
                                            <td>{post.savedPosts.length}</td>
                                            <td>{post.comments.length}</td>
                                            <td><img src="https://cdn-icons-png.flaticon.com/512/889/889731.png" alt="activate" height="30px" style={{cursor: "pointer"}} onClick={()=>{handleActive(post._id, true)}} /></td>
                                            <td><img src="https://cdn-icons-png.flaticon.com/512/3177/3177433.png" alt="delete" height="25px" style={{cursor: "pointer"}} onClick={()=>{handleDelete(post._id)}}/></td>
                                        </tr> 

                                    )
                                })
                            }
                            
                            
                            
                        </tbody>
                    </table>

                    
                </div>
            </div>
        </div>

        </>
        )}
        </>
     );
}

export default AdminPostPage;