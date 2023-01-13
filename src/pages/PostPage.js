import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../api/api.js';
import MDEditor from '@uiw/react-md-editor';
import transformImage from "../utils/TransformImage.js";
import CategoriesWidget from "../components/CategoriesWidget";
import SearchWidget from "../components/SearchWidget";
import SideWidget from "../components/SideWidget";
import { longDate } from '../utils/TransformDate.js';
import TagsWidget from '../components/TagsWidget.js';


function PostPage() {

    
    
    const { slug } = useParams();
    
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState([]);

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
    },[slug]);
    

    

    // image size : 900 x 400
    //const strImg = transformImage(post.image,"c_thumb,g_auto,h_400,w_900");

    return ( 
        <>
        {!isLoading && (

            

        <div className="container mt-5">
            <div className="row">
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
                    
                    </article>
                    
                    
                    {/* <!-- Comments section--> */}
                    <section className="mb-5">
                        <div className="card bg-light">
                            <div className="card-body">
                                {/* <!-- Comment form--> */}
                                <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                {/* <!-- Comment with nested comments--> */}
                                <div className="d-flex mb-4">
                                {/*  <!-- Parent comment--> */}
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                        {/* <!-- Child comment 1--> */}
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                            </div>
                                        </div>
                                        {/* <!-- Child comment 2--> */}
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                When you put money directly to a problem, it makes a good headline.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Single comment--> */}
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            


                {/* <!-- Side widgets--> */}
                <div className="col-lg-4">
                    {/* <!-- Search widget--> */}
                    <SearchWidget />
                    
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