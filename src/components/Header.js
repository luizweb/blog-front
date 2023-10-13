import { Link } from 'react-router-dom';
import transformImage from "../utils/TransformImage.js";


import {BsChatLeft, BsCalendarWeek, BsPersonBadge, BsFolder} from 'react-icons/bs';


function Header() {
    
    /* const bgImage = 'https://res.cloudinary.com/ddrdmilou/image/upload/blog/file_tw5qbe.png' */
   

    const strImage = transformImage("https://res.cloudinary.com/ddrdmilou/image/upload/v1697218595/blog/file_xgap9z.png", "b_rgb:F0F1F3,e_art:audrey,ar_1:1,c_fill,g_auto,r_max,w_150,h_150/co_gray,e_outline:outer:1:200/")

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
                            
                                <div className="col-lg-2 d-flex align-items-center justify-content-center">
                                    <img src={strImage} alt="profile-pic" className="img-fluid"/>
                                </div>
                                
                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                
                                    <div className="fst-italic">Bem-vindos ao meu blog dedicado ao <span className="fw-bold">desenvolvimento web</span> e à <span className="fw-bold">área de dados</span>! 
                                    Aqui compartilho conhecimentos destes dois campos que estão em constante evolução. <br></br>
                                    Meu nome é <span className="fw-bold">Luiz Simões</span> e sou de Santos-SP - Brasil.
                                    </div>
                                    
                                    <div>
                                    <Link to="/contact" className="text-decoration-none"><button className="mt-3 btn btn-primary">Entre em contato!</button></Link>                                    
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4  p-3 d-flex flex-column justify-content-center">
                                    
                                    <div className="list-group list-group-flush shadow-sm rounded">
                                        
                                        <Link to="/portfolio" className="text-decoration-none"><span className="list-group-item list-group-item-action border-top-0 border-start-0 border-end-0 fw-bold"> <BsFolder className="me-2"/> Portfolio</span></Link>
                                        <Link to="/about" className="text-decoration-none"><span className="list-group-item list-group-item-action border-top-0 border-start-0 border-end-0"> <BsPersonBadge className="me-2" /> Luiz Simões </span></Link>
                                        <Link to="/blog" className="text-decoration-none"><span className="list-group-item list-group-item-action border-top-0 border-start-0 border-end-0"> <BsCalendarWeek className="me-2" /> Blog</span></Link>
                                        <Link to="/contact" className="text-decoration-none"><span className="list-group-item list-group-item-action border-0"> <BsChatLeft className="me-2"/> Entre em contato!</span></Link>
                                    </div>
                                </div>
                            
                        </div>

                    </div>
              
            </header>
       </>
     );
}

export default Header;