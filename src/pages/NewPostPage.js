
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import MDEditor from '@uiw/react-md-editor';

function NewPostPage() {
    
    const navigate = useNavigate();    
    const [form, setForm] = useState({
        title: "",        
        image: "",
        summary: "",
        text: ""
    });

    //const [value, setValue] = useState("**Hello world!!!**");
    
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    };

    async function handleSubmit(e){
        e.preventDefault();
         
        try {       
            await api.post("/post/new-post", form);
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
                    <h1>New Post</h1>
                    
                    <form>
                        
                        <div className="col-lg-8 mb-3">
                            <label className="form-label">Título:</label>
                            <input type="text" className="form-control" name="title" onChange={handleChange} />
                        </div>

                        <div className="col-lg-8 mb-3">
                            <label className="form-label">Imagem:</label>
                            <input type="text" className="form-control" name="image" onChange={handleChange} />
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