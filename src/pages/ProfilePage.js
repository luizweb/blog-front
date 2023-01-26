import { useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/api.js';
import { AuthContext } from '../contexts/authContext';
import transformImage from "../utils/TransformImage.js";
import { shortDate } from '../utils/TransformDate.js';
import { AiOutlineDelete } from 'react-icons/ai';
import {BsBookmark} from 'react-icons/bs';

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

    // useCallback - para usar uma função dentro do useEffect abaixo (no caso, a handleLogOut)
    // ref: https://www.goldencreche.com/blog/functions-in-dependency-array-of-useeffect
    const handleLogOut = useCallback(()=>{
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate("/login");
    },[setLoggedInUser,navigate])

    useEffect(()=>{
        async function fetchUser(){
            try {
                const response = await api.get("/user/profile");
                setUser(response.data);
                setForm(response.data);
                setIsLoading(false);
            } catch (error) {
                if (error.response.status === 401){
                    // quando existe o token no localStorage, mas o token está expirado, realizar o logout.
                    handleLogOut(); 
                }
                console.log(error);                
            }
        };
        fetchUser();
    },[reload, handleLogOut]);
    
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
        
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
        
        let bodyForm = {...form}
        if (img) {
            const imgURL = await handleUpload();
            bodyForm = {...form, profilePic: imgURL}
        }
        
        
        try {       
            
            await api.put(`/user/update/${idUser}`, bodyForm);
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

    async function handleBookmark(postId, userId){
        try {
                
            const bookmarkParams = {"postId": postId, "userId": userId}
            await api.put('/post/save', bookmarkParams);
            setReload(!reload);
        } catch (error) {
            console.log(error);
        }
    };
    
    
    
    
    /* function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate("/login");
    }; */

    return (
        <>
        {!isLoading &&
         !showForm && (                               
                
                <div className="container mt-5">
                    
                    
                    <div className="row">
                        <div className="col-lg-8 m-auto shadow-sm p-3 mb-2 bg-body-tertiary rounded border d-flex">                            
                            <div className="col-lg-4 text-center bg-light pt-3">                             
                                
                                <div className="small mb-2 ms-3 text-start">
                                    <p className="fw-bolder">Status</p>
                                    <p>Total de curtidas: <span className="text-primary">{user.likes.length}</span></p> 
                                    <p>Total de comentários: <span className="text-primary">{user.comments.length}</span></p>
                                </div>                              
                            </div>
                            
                            <div className="col-lg-8 px-2 ms-3">                            
                                <h3><BsBookmark /> Posts Favoritos</h3>

                                <table className="table">
                                    
                                    <tbody>
                                {!user.savedPosts.length && (
                                    <tr>
                                        <td className="text-muted fst-italic small">Nenhuma postagem marcada como favorita</td>
                                    </tr>
                                )}
                                {
                                    user.savedPosts.map((post, index) => {
                                        return(
                                            
                                            
                                                    <tr key={post._id}>
                                                        <th>{index + 1}</th>
                                                        <td><Link to={`/blog/${post.slug}`}>{post.title}</Link></td>
                                                        <td>
                                                            <AiOutlineDelete onClick={()=>{handleBookmark(post._id, user._id)}} style={{cursor: "pointer"}} />
                                                        </td>
                                                    </tr> 
                                                
                                            
                                           
                                        )
                                    })
                                }

                                    </tbody>
                                            
                                </table>
                            </div>

                        </div>
                    </div>
                    

                    <div className="row">
                        
                        <div className="col-lg-8 m-auto shadow-sm p-3 mb-2 bg-body-tertiary rounded border d-flex">
                            
                            <div className="col-lg-4 text-center bg-light pt-3">
                              
                                <img src={transformImage(user.profilePic, "ar_1:1,c_fill,g_auto,r_max,w_300")} alt="foto-perfil" className="w-75" />
                                <div className="mt-3 fst-italic small text-black-50">Membro desde: </div>
                                <div className="small">{shortDate(user.createdAt.toString())}</div>

                                
                                
                            </div>
                            
                            <div className="col-lg-8 mx-2 px-2 ms-3">

                                <h3 className="m-0 mb-3">{user.name}</h3>               
                                
                                    
                                    {/* <div className="col-lg-12 mb-2">
                                        <p className="small mb-0 text-black-50">Nome:</p>
                                        <p className="mb-2">{user.name}</p>
                                    </div> */}
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
            
                                    <button className="mt-1 mb-3 btn btn-primary" onClick={()=>{setShowForm(true)}}>Atualizar</button>
                                    
                                    
                              
            
                            </div>

                        </div>
                    </div>

                    

                    <div className="row">
                        <div className="col-lg-8 m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded border d-flex">                            
                            <div className="col-lg-4 text-center bg-light pt-3">                             
                                     Administração da conta                           
                            </div>
                            
                            <div className="col-lg-8 mx-2 px-2 ms-3">                            
                                    <div className="col-lg-12 mb-2 d-flex flex-column">
                                        
                                        <div><span className="text-primary text-decoration-underline" onClick={handleLogOut} style={{cursor:"pointer"}}>Logout</span> </div>                                   
                                        <div><span className="text-danger mt-2 text-decoration-underline" onClick={handleDelete} style={{cursor:"pointer"}}>Apagar minha conta</span></div>
                                        
                                    </div>
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
                                        <label className="form-label small mb-0 text-black-50">Alterar Senha:</label>
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