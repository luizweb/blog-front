import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import { AuthContext } from '../contexts/authContext';

function LoginPage() {
    
    const navigate = useNavigate();    
    const [form, setForm] = useState({        
        email: "",
        password: ""        
    });
    const { setLoggedInUser } = useContext(AuthContext);
    
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    };
    
    async function handleSubmit(e){
        e.preventDefault();
        
        try {       
            const response = await api.post("/user/login", form);
            setLoggedInUser({ ...response.data });
            localStorage.setItem("loggedInUser", JSON.stringify(response.data));

            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    };

    return ( 
        <>
                
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded border">
                    <h1 className="m-0">Entre</h1>
                    <p className="mb-3">Entre e tenha acesso a um conteúdo exclusivo!</p>
                    
                    <form onSubmit={handleSubmit}>
                        
                        <div className="col-lg-12 mb-2">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange} required />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <label className="form-label">Senha:</label>
                            <input type="password" className="form-control" name="password" onChange={handleChange} required />
                        </div>

                        <button className="mt-3 mb-5 btn btn-primary" type="submit">Entrar</button>
                        <p className="text-center small my-0">Ainda não possui cadastro? <Link to="/signup">Cadastre-se</Link >.</p>
                    </form>

                </div>
            </div>
        </div>

        </>
     );
}

export default LoginPage;