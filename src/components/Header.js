import transformImage from "../utils/TransformImage.js";

function Header() {
    
    /* const bgImage = 'https://res.cloudinary.com/ddrdmilou/image/upload/blog/file_tw5qbe.png' */
   

    const strImage = transformImage("https://res.cloudinary.com/ddrdmilou/image/upload/v1676048759/blog/perfil_py0ldv.jpg", "b_rgb:F0F1F3,e_art:audrey,ar_1:1,c_fill,g_auto,r_max,w_300/co_gray,e_outline:outer:1:200/")

    return ( 
        

       <>
            <header className="py-5 border-bottom mb-4 bg-secondary bg-opacity-10">
            {/* <header className="py-5 border-bottom mb-4 bg-image" style={{backgroundImage :`url(${bgImage})`,backgroundSize: "cover"}}> */}   
                    <div className="container">
                                                                                   
                       {/*  <div className="text-center my-5">
                            <h1 className="fw-bolder">Welcome to luiweb blog!</h1>
                            <p className="lead mb-0">Texto descritivo sobre o site e o blog</p>
                        </div> */}

                        <div className="row">
                            <div className="col-2">
                            <img src={strImage} alt="profile-pic" height="170px" className="img-fluid rounded"/>
                            </div>
                            
                            <div className="col-6 d-flex flex-column justify-content-center">
                            
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus, magna vitae fringilla accumsan, justo nunc condimentum turpis, vitae congue odio leo semper enim. Etiam mattis, massa non rhoncus volutpat, sem sem hendrerit ligula, at posuere augue tellus sit amet ligula. In pellentesque leo ac malesuada pellentesque.</div>
                                
                                <div>
                                <button className="mt-3 btn btn-primary">Call to action!</button>                                    
                                </div>
                                
                            </div>
                            <div className="col-4 border p-3">
                                
                                <ul>
                                    <li>Portfolio</li>
                                    <li>Sobre</li>
                                    <li>Call to action!</li>
                                </ul>
                            </div>
                        </div>

                    </div>
              
            </header>
       </>
     );
}

export default Header;