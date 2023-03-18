import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import toast from 'react-hot-toast';


function RecoverPassPage() {
    
    const navigate = useNavigate();    
    const [form, setForm] = useState({        
        email: ""      
    });
        
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    };
    
    async function handleSubmit(e){
        
        e.preventDefault();

        try {       
            await api.post("/user/recoverpass", form);
            toast.success("Pedido de alteração de senha enviado! Verifique seu e-mail.");
            navigate("/");            
        } catch (error) {
            toast.error("Ocorreu um erro!");
            console.log(error);
        }
    };

    return ( 
        <>
                
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded border">
                    <h2 className="mb-1">Alterar a senha</h2>
                    <p className="m-0">Informe o seu email de cadastro para alterar a senha de acesso.</p>
                    <p className="mb-4">Você receberá um e-mail com as orientações.</p>
                    
                    <form onSubmit={handleSubmit}>
                        
                        <div className="col-lg-12 mb-2">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                        </div>

                        
                        <Link to="/login"><button className="mt-3 mb-3 me-2 btn btn-secondary">Voltar</button></Link>
                        <button className="mt-3 mb-3 btn btn-primary" type="submit">Enviar</button>
                        
                    </form>

                </div>
            </div>
        </div>

        </>
     );
}

export default RecoverPassPage;