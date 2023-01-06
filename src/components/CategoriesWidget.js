import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api.js';

function CategoriesWidget() {
      
    
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        async function fetchCategory(){
            try {
                const response = await api.get("/post/category");
                setCategories(response.data.category);
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
                <div className="card-header">Categories</div>
                <div className="card-body">
                    <div className="row">
                        <div>
                            
                                
                            {
                               categories.map((category, index) => {                
                                                                        
                                    return (
                                                                  
                                       <span key={index} className="mx-1"> <Link to="/">{category}</Link> </span>
                                    )
                                })
                            }
                                
                                
                                
                            
                           
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