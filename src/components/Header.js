function Header() {
    
    //const bgImage = 'https://images.unsplash.com/photo-1594031245755-1ac99bbc7a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
   

    return ( 
        

        <header className="py-5 border-bottom mb-4 bg-black bg-opacity-10">
        {/* <header className="py-5 border-bottom mb-4 bg-image" style={{backgroundImage :`url(${bgImage})`,backgroundSize: "cover"}}> */}    
                <div className="container">
                    <div className="text-center my-5">
                        <h1 className="fw-bolder">Welcome to luiweb blog!</h1>
                        <p className="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
                    </div>
                </div>
          
        </header>
     );
}

export default Header;