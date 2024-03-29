import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import { AuthContext } from '../contexts/authContext';
import toast from 'react-hot-toast';

function LoginPage() {
    
    const navigate = useNavigate();    
    const [form, setForm] = useState({        
        email: "",
        password: ""        
    });
    const [sending, setSending] = useState(false);

    const { setLoggedInUser } = useContext(AuthContext);
    
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    };
    
    async function handleSubmit(e){
        e.preventDefault();
        
        setSending(true);

        try {       
            const response = await api.post("/user/login", form);
            setLoggedInUser({ ...response.data });
            localStorage.setItem("loggedInUser", JSON.stringify(response.data));
            toast.success("Login efetuado com sucesso!");
            setSending(false);
            navigate("/profile");
        } catch (error) {
            toast.error("Email ou Senha inválidos.");
            setSending(false);
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
                            <input type="email" className="form-control" name="email" onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <label className="form-label">Senha:</label>
                            <input type="password" className="form-control" name="password" onChange={handleChange} required />
                        </div>

                        <button className="mt-3 mb-3 btn btn-primary" type="submit" disabled={sending}>
                        {sending ? 'Entrando...' : 'Entrar'}
                        </button>
                        
                        
                        <div className="d-flex justify-content-between">
                            <span className="text-center small my-0"> <Link to="/recoverpass">Esqueceu a senha?</Link ></span>
                            <span className="text-center small my-0">Ainda não possui cadastro? <Link to="/signup">Cadastre-se</Link ></span>
                        </div>
                    </form>

                </div>
            </div>
        </div>

        </>
     );
}

export default LoginPage;