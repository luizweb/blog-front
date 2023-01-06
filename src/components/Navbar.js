import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-luizweb">
            <div className="container">
                <Link to="/" className="navbar-brand">luizweb</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to="/signup" className="nav-link">Cadastre-se</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-link">Entrar</Link></li>
                        <li className="nav-item"><Link to="/profile" className="nav-link">Perfil</Link></li>
                        <li className="nav-item"><Link to="/newpost" className="nav-link">Novo Post</Link></li>  
                        <li className="nav-item"><Link to="/admin-post" className="nav-link">Admin Posts</Link></li>                      
                        <li className="nav-item"><Link to="/admin-user" className="nav-link">Admin Usuários</Link></li>
                        <li className="nav-item"><Link className="nav-link">Sobre</Link></li>
                        <li className="nav-item"><Link className="nav-link">Contato</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;