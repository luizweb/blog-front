import {useState, useEffect} from 'react';
import api from '../api/api.js';
import transformImage from "../utils/TransformImage.js";
import { shortDate } from '../utils/TransformDate.js';

function AdminUserPage() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function fetchPosts(){
            try {
                const response = await api.get("/user/admin-user");
                setUsers(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    },[reload]);

    async function handleDelete(id){
        try {
            await api.delete(`user/delete/${id}`)
            setReload(!reload);
        } catch (error) {
            console.log(error);
        }
    };

    return ( 
        <>
        {!isLoading && (
        
        <>
                
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 mb-5">
                    <h1 className="mb-3">Usuários</h1>
                    
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pic</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Cadastro</th>
                            <th scope="col">Confirmado</th>
                            <th scope="col">Ativo</th>
                            <th scope="col">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {                                    

                                    let strImage = transformImage(user.profilePic, "ar_1:1,c_fill,g_auto,r_max,w_300")

                                    return (

                                        <tr key={user._id} className="align-baseline">
                                            <th scope="row">{index}</th>
                                            <td><img src={strImage} alt="profile-pic" height="40px"/></td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>{shortDate(user.createdAt.toString())}</td>
                                            <td>{user.confirmedEmail?"S":"N"}</td>
                                            <td>{user.active?"S":"N"}</td>
                                            <td>
                                                <img src="https://cdn-icons-png.flaticon.com/512/2546/2546705.png" alt="update" height="25px"/> &nbsp;
                                                <img src="https://cdn-icons-png.flaticon.com/512/3177/3177433.png" alt="delete" height="25px" style={{cursor: "pointer"}} onClick={()=>{handleDelete(user._id)}}/>
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

        </>
        )}
        </>

     );
}

export default AdminUserPage;