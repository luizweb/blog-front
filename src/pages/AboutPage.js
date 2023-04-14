import SideWidget from "../components/SideWidget";
import transformImage from "../utils/TransformImage.js";

function AboutPage() {
    
    const strImage = transformImage("https://res.cloudinary.com/ddrdmilou/image/upload/v1681478677/blog/file_qkxjuv.png", "b_rgb:FFFFFF,e_art:audrey,ar_1:1,c_fill,g_auto,r_max,w_150,h_150/co_gray,e_outline:outer:1:200/")
    
    
    return ( 
        <div className="container mt-5">
            <div className="row">

                
                
                <div className="col-lg-8 m-auto">
                    <h2 className="mb-3">Sobre</h2>

                   

                        <div className="mb-3">
                        
                            <div className="fst-italic mb-5">
                            <p>
                                Bem-vindos ao meu blog dedicado ao <span className="fw-bold">desenvolvimento web</span> e à <span className="fw-bold">área de dados</span>! 
                                Aqui compartilho conhecimentos destes dois campos que estão em constante evolução.
                            </p> 
                            
                            <p>Meu nome é <span className="fw-bold">Luiz Simões</span> e sou de Santos-SP - Brasil. Sou formado em Ciência da Computação desde 2000.</p>
                            
                            
                            </div>

                            <div className="mb-3 d-flex align-items-center justify-content-center">
                            <img src={strImage} alt="profile-pic" className="img-fluid"/>
                            </div>

                            <SideWidget />

                        </div>



                  

                    

                </div>
            </div>
        </div>
     );
}

export default AboutPage;