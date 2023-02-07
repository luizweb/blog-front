import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import transformImage from "../utils/TransformImage.js";

function Navbar() {
    
    const { loggedInUser } = useContext(AuthContext);
    
    
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-luizweb">
            <div className="container">
                <Link to="/" className="navbar-brand">
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1449/1449081.png" alt="logo" width="25px" className="me-3" /> */}
                <span className="fw-bolder fst-italic fs-3">luizweb</span>  
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



                        <li className="nav-item"><Link to="/blog" className="nav-link" aria-current="page">Blog</Link></li>
                        <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">Sobre</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contato</Link></li> 

                    {!loggedInUser && (
                        <>
                        <span className="text-info mx-2">|</span>                       
                        <li className="nav-item"><Link to="/signup" className="nav-link">Cadastre-se</Link></li>
                        <li className="nav-item"><Link to="/login"><button className="btn btn-outline-info" type="submit">Entrar</button></Link></li>
                        </>
                        )}       
                        
                    {loggedInUser && (
                        <>    
                        
                        {loggedInUser.user.role === "ADMIN" && (                     
                            
                            <>
                                <span className="text-info mx-2">|</span>
                                <li className="nav-item"><Link to="/newpost" className="nav-link">Novo Post</Link></li>  
                                <li className="nav-item"><Link to="/admin-post" className="nav-link">Admin Posts</Link></li>                      
                                <li className="nav-item"><Link to="/admin-user" className="nav-link">Admin Usuários</Link></li>   
                            </>                
                            )}
                        
                        <span className="text-info mx-2">|</span>
                        <li className="text-white pe-0"><Link to="/profile" className="nav-link active">{loggedInUser.user.name}</Link> </li>
                        <li className="nav-item ">
                            <Link to="/profile" className="nav-link p-0"> 
                                <img src={transformImage(loggedInUser.user.profilePic, "ar_1:1,c_fill,g_auto,r_max,w_300")} alt="profile-pic" height="40px"/> 
                            </Link>
                        </li>                    
                        
                        


                        </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;