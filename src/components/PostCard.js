import { Link } from 'react-router-dom';
import { longDate } from '../utils/TransformDate.js';
import transformImage from "../utils/TransformImage.js";

function PostCard({post}) {
    
    // image size : 700 x 350
    const strImg = transformImage(post.image,"c_thumb,g_auto,h_350,w_700");
    const strDate = longDate(post.createdAt.toString())

    return ( 
        <div className="card mb-4">
            {/* 700 x 350 */}
            <Link to={`/blog/${post.slug}`}><img className="card-img-top" src={strImg} alt="post-pic" /></Link>
            <div className="card-body">
                <div className="small text-muted"> {strDate} </div>
                <h2 className="card-title h4"> {post.title} </h2>
                <p className="card-text">
                {post.summary.slice(0,90)}
                </p>
                <Link to={`/blog/${post.slug}`} className ="btn btn-primary">Leia mais →</Link>
            </div>
        </div>
     );
}

export default PostCard;