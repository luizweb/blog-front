import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../api/api.js';
import {RxHome} from 'react-icons/rx';
import {MdOutlineNavigateNext} from 'react-icons/md';


import CategoriesWidget from "../components/CategoriesWidget";
import PostCard from "../components/PostCard";

import SideWidget from "../components/SideWidget";
import TagsWidget from '../components/TagsWidget.js';

function BlogCategoryPage() {

    const { categoria } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function fetchPosts(){
            try {
                const response = await api.get(`/post/category/${categoria}`);
                setPosts(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    },[categoria])

    return ( 
        <>
        {!isLoading && (

        <>
        
        
        <div className="container mt-5">
            <div className="row">

            
                <div className="fs-6 mb-4">
                    <Link to="/"><RxHome className="fs-5 text-black-50" /></Link>
                    <MdOutlineNavigateNext className="text-black-50" /><Link to="/blog" className="text-black-50 text-decoration-none">Blog</Link>
                    <MdOutlineNavigateNext className="text-black-50" /><span className="text-black-50">Categoria</span>
                    <MdOutlineNavigateNext className="text-black-50" /><span className="fw-bold">{categoria}</span>
                </div>

                {/* <!-- Blog entries--> */}
                <div className="col-lg-8">
                                   
                    
                    
                    {/* <!-- Nested row for non-featured blog posts--> */}
                    <div className="row">
                        
                            {/* <!-- Blog post--> */}
                            
                            {
                                posts         
                                .map((post) => {                
                                                                        
                                    return (
                                                                  
                                        <div key={post._id} className="col-lg-6">
                                            <PostCard post={post} />
                                        </div>
                                    )
                                })
                            }

                            
                        
                    </div>


                    {/* <!-- Pagination--> */}
                    {/* <nav aria-label="Pagination">
                        <hr className="my-0" />
                        <ul className="pagination justify-content-center my-4">
                            <li className="page-item disabled"><a className="page-link" href="#!" tabIndex="-1" aria-disabled="true">Newer</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                            <li className="page-item"><a className="page-link" href="#!">15</a></li>
                            <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav> */}
                </div>



                {/* <!-- Side widgets--> */}
                <div className="col-lg-4">
                    {/* <!-- Search widget--> */}
                    {/* <SearchWidget /> */}
                    
                    {/* <!-- Categories widget--> */}
                    <CategoriesWidget />

                    {/* <!-- Tags widget--> */}
                    <TagsWidget/>
                    
                    {/* <!-- Side widget--> */}
                    <SideWidget />
                </div>
            </div>
        </div>
        </>

        )}

                            

        </>
     );
}

export default BlogCategoryPage;