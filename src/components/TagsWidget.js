import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api.js';

function TagsWidget() {
      
    
    const [isLoading, setIsLoading] = useState(true);
    const [tags, setTags] = useState({});

    useEffect(()=>{
        async function fetchCategory(){
            try {
                const response = await api.get("/post/alltags");
                setTags(response.data);
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
                <div className="card-header">Tags</div>
                <div className="card-body">
                    <div className="row">
                        <div>
                            
                                
                            {
                               Object.entries(tags).map(([k,v], index) => {
                                return(
                                                                             
                                        <span key={index} className="px-1"><Link to={`/blog/tag/${k}`}>{k}</Link></span>                                        
                                   
                                )})
                               
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

export default TagsWidget;