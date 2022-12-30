import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api.js';

function SignUpPage() {
    
    const navigate = useNavigate();    
    const [form, setForm] = useState({
        name: "",        
        email: "",
        profilePic: ""
    });
    
    
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    };
    
    async function handleSubmit(e){
        e.preventDefault();
        
        try {       
            await api.post("/user/new-user", form);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return ( 

        <>
                
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 m-auto shadow p-3 mb-5 bg-body-tertiary rounded">
                    <h1 className="mb-3">Cadastrar</h1>
                    
                    <form>
                        
                        <div className="col-lg-12 mb-3">
                            <label className="form-label">Nome:</label>
                            <input type="text" className="form-control" name="name" onChange={handleChange} />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <label className="form-label">Email:</label>
                            <input type="text" className="form-control" name="email" onChange={handleChange} />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <label className="form-label">Foto do perfil:</label>
                            <input type="text" className="form-control" name="profilePic" onChange={handleChange} />
                        </div>
                                                
                          
                        <button className="mt-3 btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
                    </form>

                </div>
            </div>
        </div>

        </>

     );
}

export default SignUpPage;