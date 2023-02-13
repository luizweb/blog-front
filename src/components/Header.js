import { Link } from 'react-router-dom';
import transformImage from "../utils/TransformImage.js";

import {TiFolderOpen, TiUserOutline, TiMail} from 'react-icons/ti';


function Header() {
    
    /* const bgImage = 'https://res.cloudinary.com/ddrdmilou/image/upload/blog/file_tw5qbe.png' */
   

    const strImage = transformImage("https://res.cloudinary.com/ddrdmilou/image/upload/v1676048759/blog/perfil_py0ldv.jpg", "b_rgb:F0F1F3,e_art:audrey,ar_1:1,c_fill,g_auto,r_max,w_200/co_gray,e_outline:outer:1:200/")

    return ( 
        

       <>
            <header className="py-lg-4 py-3 border-bottom mb-4 bg-secondary bg-opacity-10">
            {/* <header className="py-5 border-bottom mb-4 bg-image" style={{backgroundImage :`url(${bgImage})`,backgroundSize: "cover"}}> */}   
                    <div className="container">
                                                                                   
                       {/*  <div className="text-center my-5">
                            <h1 className="fw-bolder">Welcome to luiweb blog!</h1>
                            <p className="lead mb-0">Texto descritivo sobre o site e o blog</p>
                        </div> */}

                        <div className="row">
                            
                                <div className="col-lg-2 d-flex justify-content-center mb-3">
                                <img src={strImage} alt="profile-pic" className="img-fluid"/>
                                </div>
                                
                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus, magna vitae fringilla accumsan, justo nunc condimentum turpis, vitae congue odio leo semper enim. Etiam mattis, massa non rhoncus volutpat, sem sem hendrerit ligula, at posuere augue tellus sit amet ligula. In pellentesque leo ac malesuada pellentesque.</div>
                                    
                                    <div>
                                    <button className="mt-3 btn btn-primary">Call to action!</button>                                    
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4 p-3 d-flex flex-column justify-content-center">
                                    
                                    <div className="list-group list-group-flush fs-5 fw-bold shadow-sm rounded">
                                        <Link to="/portfolio" className="text-decoration-none"><span className="list-group-item list-group-item-action border-top-0 border-start-0 border-end-0"> <TiFolderOpen /> Portfolio</span></Link>
                                        <Link to="/about" className="text-decoration-none"><span className="list-group-item list-group-item-action border-top-0 border-start-0 border-end-0"> <TiUserOutline /> Sobre </span></Link>
                                        <Link to="/contact" className="text-decoration-none"><span className="list-group-item list-group-item-action border-0"> <TiMail /> Call to action!</span></Link>
                                    </div>
                                </div>
                            
                        </div>

                    </div>
              
            </header>
       </>
     );
}

export default Header;