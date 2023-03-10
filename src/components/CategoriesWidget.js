import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api.js';

function CategoriesWidget() {
      
    
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState({});

    useEffect(()=>{
        async function fetchCategory(){
            try {
                const response = await api.get("/post/allcategories");
                setCategories(response.data);
                setIsLoading(false); 
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategory();
    },[]);
    
    
    return ( 

        <>
        {!isLoading && (
            
            <div className="card mb-4">
                <div className="card-header">Categorias</div>
                <div className="card-body">
                    <div className="row">
                        <div>
                            <ul className="list-group">
                                
                            {
                               Object.entries(categories).map(([k,v], index) => {
                                return(
                                    <Link key={index} to={`/blog/categoria/${k}`} className="text-decoration-none">
                                        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 border-bottom"> {k} 
                                        <span className="badge bg-secondary bg-opacity-50">{v}</span>
                                        </li>
                                    </Link>
                                )})
                               
                            }
                            </ul>    
                                
                                
                            
                           
                        </div>
                        
                        
                        {/* <div className="col-sm-6">
                            <ul className="list-unstyled mb-0">
                                <li><a href="#!">JavaScript</a></li>
                                <li><a href="#!">CSS</a></li>
                                <li><a href="#!">Tutorials</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div> 

        )}
        </>    
    );
}

export default CategoriesWidget;