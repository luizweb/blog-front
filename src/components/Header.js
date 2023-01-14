function Header() {
    
    /* const bgImage = 'https://res.cloudinary.com/ddrdmilou/image/upload/blog/file_tw5qbe.png' */
   

    return ( 
        

       <>
            <header className="py-3 border-bottom mb-4 bg-secondary bg-opacity-10">
            {/* <header className="py-5 border-bottom mb-4 bg-image" style={{backgroundImage :`url(${bgImage})`,backgroundSize: "cover"}}> */}   
                    <div className="container">
                        <div className="text-center my-5">
                            <h1 className="fw-bolder">Welcome to luiweb blog!</h1>
                            <p className="lead mb-0">Texto descritivo sobre o site e o blog</p>
                        </div>
                    </div>
              
            </header>
       </>
     );
}

export default Header;