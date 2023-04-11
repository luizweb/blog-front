import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import toast from 'react-hot-toast';

function SignUpPage() {
    
    const navigate = useNavigate();    
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [sending, setSending] = useState(false);
    
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    };
    
    async function handleSubmit(e){
        e.preventDefault();
        
        if (form.password !== form.confirmPassword) {
            toast.error("Senha e Confirmação diferentes");
            return;
        };

        setSending(true);

        try {       
            await api.post("/user/signup", form);
            toast.success("Cadastro realizado com sucesso!");
            setSending(false);
            navigate("/login");
        } catch (error) {
            toast.error("Ocorreu um erro.");
            console.log(error);
        }
    };

    return ( 

        <>
                
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded border">
                    <h1 className="m-0">Cadastre-se</h1>
                    <p className="mb-3">Tenha acesso a um conteúdo exclusivo!</p>
                    
                    <form onSubmit={handleSubmit}>
                        
                        <div className="col-lg-12 mb-2">
                            <label className="form-label">Nome:</label>
                            <input type="text" className="form-control" name="name" onChange={handleChange} required />
                        </div>
                        
                        <div className="col-lg-12 mb-2">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                        </div>

                        <div className="col-lg-12 mb-2">
                            <label className="form-label">Senha:</label>
                            <input type="password" className="form-control" name="password" onChange={handleChange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" required />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <label className="form-label">Confirme a senha:</label>
                            <input type="password" className="form-control" name="confirmPassword" onChange={handleChange} required />
                        </div>

                        <div className="col-lg-12 mb-3 small">
                            A senha deve conter:
                            <ul className="list-group-item-info">
                                <li>no mínimo 8 caracteres;</li>
                                <li>uma letra maiúscula e uma minúscula;</li>
                                <li>um número;</li>
                                <li>um caracter especial; Ex.: @, #</li>
                            </ul>
                        </div>

                        <button className="mt-3 mb-5 btn btn-primary" type="submit" disabled={sending}>
                        {sending ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                        

                        <p className="text-center small my-0">Já possui cadastro? Faça o seu <Link to="/login">login</Link>.</p>
                    </form>

                </div>
            </div>
        </div>

        </>

     );
}

export default SignUpPage;