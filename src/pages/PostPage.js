import {useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../api/api.js';
import MDEditor from '@uiw/react-md-editor';
import transformImage from '../utils/TransformImage.js';
import CategoriesWidget from '../components/CategoriesWidget';

import SideWidget from '../components/SideWidget';
import Comment from '../components/Comment'
import { longDate } from '../utils/TransformDate.js';
import TagsWidget from '../components/TagsWidget.js';
import { AuthContext } from '../contexts/authContext';

import {RxHome} from 'react-icons/rx';
import {MdOutlineNavigateNext} from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai';
import {AiFillLike} from 'react-icons/ai';
import {BsBookmark} from 'react-icons/bs';
import {BsBookmarkCheckFill} from 'react-icons/bs';
import {FaRegCommentAlt} from 'react-icons/fa';



function PostPage() {

    const { loggedInUser } = useContext(AuthContext);
    
    const { slug } = useParams();
    
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState([]);
    const [reload, setReload] = useState(false)

    useEffect(()=>{
        async function fetchPosts(){
            try {
                const response = await api.get(`/post/post/${slug}`);
                setPost(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    },[slug, reload]);
    

    async function handleLike(postId, userId){
        try {
                
            const likeParams = {"postId": postId, "userId": userId}
            await api.put('/post/like', likeParams);
            setReload(!reload);
        } catch (error) {
            console.log(error);
        }
    };

    async function handleBookmark(postId, userId){
        try {
                
            const bookmarkParams = {"postId": postId, "userId": userId}
            await api.put('/post/save', bookmarkParams);
            setReload(!reload);
        } catch (error) {
            console.log(error);
        }
    };
    
    // image size : 900 x 400
    //const strImg = transformImage(post.image,"c_thumb,g_auto,h_400,w_900");

    return ( 
        <>
        {!isLoading && (

            

        <div className="container mt-5">
            <div className="row">

                <div className="fs-6 mb-4">
                    <Link to="/"><RxHome className="fs-5 text-black-50" /></Link>
                    <MdOutlineNavigateNext className="text-black-50" /><Link to="/blog" className="text-black-50 text-decoration-none">Blog</Link>
                   
                </div>


                <div className="col-lg-8">

                
                         
                    {/* <!-- Post content--> */}
                    <article>
                        
                        {/* <!-- Post header--> */}
                        <header className="mb-4">
                            {/* <!-- Post title--> */}
                            <h1 className="fw-bolder mb-1"> {post.title} </h1>
                            
                            {/* <!-- Post meta content--> */}
                            <div className="text-muted fst-italic mb-2">Publicado em {longDate(post.createdAt.toString())} por {post.author.name}</div>
                            
                            {/* <!-- Post categories--> */}
                            {
                                post.tags.map((tag, index)=>{
                                    return (                                        
                                        <Link key={index} className="badge bg-secondary text-decoration-none link-light mx-1" to={`/blog/tag/${tag}`}>{tag}</Link>
                                    )
                                })
                            }
                                              
                        </header>
                        
                        {/* <!-- Preview image figure--> */}
                        {/* 900 x 400 */}
                        <figure className="mb-4"><img className="img-fluid rounded" src={transformImage(post.image,"c_thumb,h_400,w_900")} alt="post-pic" /></figure>
                        
                        {/* <!-- Post content--> */}
                        <section className="mb-5">
                            <MDEditor.Markdown source={post.text} />
                        </section>
                    

                        {/* --- LIKE, SAVE, COMMENTS --- */}
                        {loggedInUser ? (
                        <section className="mb-5 d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center">   
                                <div>
                                    {(post.likes.includes(loggedInUser.user._id)) ? (
                                        <AiFillLike className="fs-4" onClick={()=>{handleLike(post._id, loggedInUser.user._id)}} style={{cursor: "pointer"}} />   
                                    ) : (
                                        <AiOutlineLike className="fs-4" onClick={()=>{handleLike(post._id, loggedInUser.user._id)}} style={{cursor: "pointer"}}/> 
                                    )}
                                </div>
                                <div className="ps-1 fs-6 text-color-black-50">{post.likes.length}</div>
                            </div>

                            <div className="d-flex align-items-center ps-5">   
                                <div>
                                    {(post.savedPosts.includes(loggedInUser.user._id)) ? (
                                        <BsBookmarkCheckFill className="fs-4" onClick={()=>{handleBookmark(post._id, loggedInUser.user._id)}} style={{cursor: "pointer"}} />   
                                    ) : (
                                        <BsBookmark className="fs-4" onClick={()=>{handleBookmark(post._id, loggedInUser.user._id)}} style={{cursor: "pointer"}}/> 
                                    )}
                                </div>
                                <div className="ps-1 fs-6 text-color-black-50">{post.savedPosts.length}</div>
                            </div>

                            <div className="d-flex align-items-center ps-5">   
                                <div>                     
                                    <FaRegCommentAlt className="fs-4 text-muted" />                                   
                                </div>
                                <div className="ps-1 fs-6 text-muted">{post.comments.length}</div>
                            </div>
                        </section>    
                        ):
                        (<div className="bg-dark bg-opacity-10 p-3 mb-5">Para curtir, salvar como favorita ou comentar a postagem, <Link to="/signup">cadastre-se!</Link> Já é cadastrado? Faça o seu <Link to="/login">login</Link>. </div>)}
                    </article>
                    
                    {loggedInUser && (
                    <>
                    {/* <!-- Comments section--> */}
                    <Comment postId={post._id} setReload={setReload} reload={reload}/>
                    </>
                    )}
                </div>
            


                {/* <!-- Side widgets--> */}
                <div className="col-lg-4">
                    {/* <!-- Search widget--> */}
                    {/* <SearchWidget /> */}
                    
                    {/* <!-- Categories widget--> */}
                    <CategoriesWidget />

                    {/* <!-- Tags widget--> */}
                    <TagsWidget />
                    
                    {/* <!-- Side widget--> */}
                    <SideWidget />
                </div>
            </div>
        
        </div>

        )}        

        </>
     );
}

export default PostPage;