import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import toast from 'react-hot-toast';


function UpdatePassPage() {
    
    const {id} = useParams();

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();    
    
    const [form, setForm] = useState({        
        password: "",
        confirmPassword: ""      
    });
       
    
    useEffect(()=>{
        async function fetchUser(){
            try {
                const response = await api.get(`user/getuser/${id}`);
                setUser(response.data);                
                setIsLoading(false);
            } catch (error) {
                console.log(error);                
            }
        };
        fetchUser();
    },[id]);


    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    };
    
    async function handleSubmit(e){
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            toast.error("Senha e Confirmação diferentes");
            return;
        };

        try {       
            await api.put(`/user/updatepass/${id}`, form);
            toast.success("Senha alterada com sucesso!");
            navigate("/login");            
        } catch (error) {
            toast.error("Ocorreu um erro!");
            console.log(error);
        }
    };

    return ( 
        <>
        {!isLoading &&        
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded border">
                    <h2 className="mb-3">Alterar a senha</h2>
                    
                    <p className="mb-3 text-primary fw-bold fs-4">{user.name}</p>
                    
                    <form onSubmit={handleSubmit}>
                        
                        <div className="col-lg-12 mb-2">
                            <label className="form-label">Nova Senha:</label>
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
                        
                        <button className="mt-3 mb-3 btn btn-primary" type="submit">Alterar</button>
                        
                    </form>

                </div>
            </div>
        </div>
        }
        </>
     );
}

export default UpdatePassPage;