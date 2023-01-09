
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import api from '../api/api.js';
import MDEditor from '@uiw/react-md-editor';

function NewPostPage() {
    
    const { loggedInUser } = useContext(AuthContext);
    const idUser = loggedInUser.user._id;
    console.log(idUser)
    const navigate = useNavigate();    
    const [form, setForm] = useState({
        title: "",        
        category: [],
        image: "",
        summary: "",
        text: ""
    });

    const [img, setImg] = useState();

    //const [value, setValue] = useState("**Hello world!!!**");
    
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    };

    function handleImage(e){
        //setImg(e.target.files[0].name);
        setImg(e.target.files[0]);
        console.log(e.target.files[0])
    }
    
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
        const arrayCategory = form.category.split(",").map(element => element.trim());
        console.log(imgURL)
        console.log(arrayCategory)
        try {       
            await api.post("/post/new-post", {...form, author: idUser, category: arrayCategory, image: imgURL});
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return ( 

        <>
                
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 mb-5">
                    <h1 className="mb-3">Nova Publicação</h1>
                    
                    <form>
                        
                        <div className="col-lg-8 mb-3">
                            <label className="form-label">Título:</label>
                            <input type="text" className="form-control" name="title" onChange={handleChange} />
                        </div>

                        <div className="col-lg-8 mb-3">
                            <label className="form-label">Categorias:</label>
                            <input type="text" className="form-control" name="category" onChange={handleChange} />
                        </div>
                        
                        <div className="col-lg-8 mb-3">
                            <label className="form-label">Imagem:</label>
                            <input className="form-control" type="file" name="image" onChange={handleImage} />
                        </div>                        

                        <div className="col-lg-12 mb-3">
                            <label className="form-label">Resumo:</label>
                            <input type="text" className="form-control" name="summary" onChange={handleChange} />
                        </div>
                        
                        <div className="col-lg-12 mb-3">
                            <label className="form-label">Editor:</label>
                            <MDEditor value={form.text} onChange={(value)=>setForm({ ...form, text: value})} />
                        </div>

                        
                          
                        <button className="mt-3 btn btn-primary" onClick={handleSubmit}>Publicar!</button>
                    </form>

                </div>
            </div>
        </div>

        </>

     );
}

export default NewPostPage;