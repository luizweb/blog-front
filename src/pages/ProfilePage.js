import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import { AuthContext } from '../contexts/authContext';
import transformImage from "../utils/TransformImage.js";

function ProfilePage() {
    
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext); 
    const navigate = useNavigate();       
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);    
    const [user, setUser] = useState([]);
    const [form, setForm] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [img, setImg] = useState("");
    const idUser = loggedInUser.user._id;

    useEffect(()=>{
        async function fetchUser(){
            try {
                const response = await api.get("/user/profile");
                setUser(response.data);
                setForm(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    },[reload]);
    
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
        console.log(form);
    };

    function handleImage(e){
        setImg(e.target.files[0]);
     };

    async function handleUpload(e){
        try {
            const uploadData = new FormData();
            uploadData.append("picture", img);
            const response = await api.post('/upload/img', uploadData)
            return response.data.url;

        } catch (error) {
            console.log(error);
        }
    };

    async function handleSubmit(e){
        e.preventDefault();        
        const imgURL = await handleUpload();
        
        try {       
            
            await api.put(`/user/update/${idUser}`, {...form, profilePic: imgURL});
            setShowForm(false);
            setReload(!reload);
            
        } catch (error) {
            console.log(error);
        }
    };

    async function handleDelete(e){
        e.preventDefault();
        try {
            await api.delete(`user/delete/${idUser}`)
            setReload(!reload);
        } catch (error) {
            console.log(error);
        }
    };

    function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate("/login");
    };

    return (
        <>
        {!isLoading &&
         !showForm && (                               
                
                <div className="container mt-5">
                    <div className="row">
                        
                        <div className="col-lg-6 m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded border d-flex">
                            
                            <div className="col-lg-4 text-center bg-light pt-3">
                              
                                <img src={transformImage(user.profilePic, "ar_1:1,c_fill,g_auto,r_max,w_300")} alt="foto-perfil" className="w-75" />
                            </div>
                            
                            <div className="col-lg-8 mx-2 px-2">

                                <h3 className="m-0 mb-3">Perfil</h3>               
                                
                                    
                                    <div className="col-lg-12 mb-2">
                                        <p className="small mb-0 text-black-50">Nome:</p>
                                        <p className="mb-2">{user.name}</p>
                                    </div>
                                                                 <div className="col-lg-12 mb-2">
                                        <p className="small mb-0 text-black-50">Email:</p>
                                        <p className="mb-2">{user.email}</p>
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <p className="small mb-0 text-black-50">Data Nascimento:</p>
                                        <p className="mb-2">{user.birth?user.birth:"-"}</p>
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <p className="small mb-0 text-black-50">Sexo:</p>
                                        <p className="mb-2">{user.gender}</p>
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <p className="small mb-0 text-black-50">Estado:</p>
                                        <p className="mb-2">{user.state?user.state:"-"}</p>
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <p className="small mb-0 text-black-50">Cidade:</p>
                                        <p className="mb-3">{user.city?user.city:"-"}</p>
                                    </div>
            
                                    <button className="mt-3 mb-3 btn btn-primary" onClick={()=>{setShowForm(true)}}>Atualizar</button>
                                    <button className="mt-3 mb-3 m-2 btn btn-warning" onClick={handleLogOut}>Logout</button>                                    
                                    <button className="mt-3 mb-3 btn btn-danger" onClick={handleDelete}>Deletar</button>
                                    
                              
            
                            </div>

                        </div>
                    </div>
                </div>
        )}
        

        {!isLoading &&
         showForm && (
            
                <div className="container mt-5">
                    <div className="row">
                        
                        <div className="col-lg-6 m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded border d-flex">
                            
                            <div className="col-lg-4 text-center bg-light pt-3">
                                <img src={transformImage(form.profilePic, "ar_1:1,c_fill,g_auto,r_max,w_300")} alt="foto-perfil" className="w-75" />
                            </div>
                            
                            <div className="col-lg-8 mx-2 px-2">

                                <h3 className="m-0 mb-3 ">Atualizar Perfil</h3>               
                                
                                    
                                <form>
                        
                                    <div className="col-lg-12 mb-2">
                                        <label className="form-label small mb-0 text-black-50">Nome:</label>
                                        <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} />
                                    </div>
                                    
                                    <div className="col-lg-12 mb-2">
                                        <label className="form-label small mb-0 text-black-50">Email:</label>
                                        <p className="mb-3 fw-bold">{form.email}</p>
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <label className="form-label small mb-0 text-black-50">Foto do perfil:</label>
                                        <input className="form-control" type="file" name="image" onChange={handleImage} />
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <label className="form-label small mb-0 text-black-50">Data de nascimento:</label>
                                        <input type="text" className="form-control" name="birth" value={form.birth} onChange={handleChange} />
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <label className="form-label small mb-0 text-black-50">Sexo:</label>
                                        <select className="form-select" name="gender" onChange={handleChange}>
                                            <option value={user.gender}>{form.gender}</option>
                                            <option value="Feminino">Feminino</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Não Informado">Não informado</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <label className="form-label small mb-0 text-black-50">Estado:</label>
                                        <input type="text" className="form-control" name="state" value={form.state} onChange={handleChange} />
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <label className="form-label small mb-0 text-black-50">Cidade:</label>
                                        <input type="text" className="form-control" name="city" value={form.city} onChange={handleChange} />
                                    </div>

                                    
                                    <div className="col-lg-12 mb-2">
                                        <label className="form-label small mb-0 text-black-50">Senha:</label>
                                        <input type="password" className="form-control" name="password" placeholder="********" onChange={handleChange} />
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <label className="form-label small mb-0 text-black-50">Confirme a senha:</label>
                                        <input type="password" className="form-control" name="confirmPassword" placeholder="********" onChange={handleChange} />
                                    </div>

                                    <button className="mt-3 mb-3 btn btn-primary" onClick={handleSubmit}>Atualizar</button>
                                    <button className="mt-3 mb-3 btn m-2 btn-primary" onClick={()=>{setShowForm(false)}}>Cancelar</button>
                                </form>
                              
            
                            </div>

                        </div>
                    </div>
                </div>


         )}
        </>

     );
}

export default ProfilePage;