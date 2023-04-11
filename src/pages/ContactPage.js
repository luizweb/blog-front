import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import toast from 'react-hot-toast';

function ContactPage() {

    const navigate = useNavigate();  
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [sending, setSending] = useState(false);

    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
        
    };


    async function handleSubmit(e){
        e.preventDefault();
        
        setSending(true);

        try {       
            await api.post("/user/contact", form);
            toast.success("Mensagem enviada!");
            setSending(false);
            navigate("/");
        } catch (error) {
            toast.error("Ocorreu um erro.");
            console.log(error);
        }
    };


    return ( 
        <div className="container mt-5">
            <div className="row">

            <div className="col-lg-6 m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded border">
                    <h1 className="m-0 mb-4">Contato</h1>
                    
                    
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
                            <label className="form-label">Mensagem:</label>
                            <textarea className="form-control" name="message" rows="3" onChange={handleChange} required></textarea>
                        </div>
                       

                        <button className="mt-3 mb-5 btn btn-primary" type="submit" disabled={sending}>
                        {sending ? 'Enviando...' : 'Enviar'}
                        </button>
                        
                    </form>

                </div>
                
            </div>
        </div>
     );
}

export default ContactPage;