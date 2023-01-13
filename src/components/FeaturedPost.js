import { Link } from 'react-router-dom';
import { longDate } from '../utils/TransformDate.js';
import transformImage from "../utils/TransformImage.js";

function FeaturedPost({post}) {

    // image size : 850 x 350
    //old: "c_thumb,g_auto,h_350,w_850"
    const cloudinary_transformation = "c_thumb,h_350,w_850"
    const strImg = transformImage(post.image, cloudinary_transformation);
    const strDate = longDate(post.createdAt.toString())

    return ( 
        <div className="card mb-4">
            {/* 850x350 */}
            <Link to={`/blog/${post.slug}`}><img className="card-img-top" src={ strImg } alt="..." /></Link>
            <div className="card-body">
                <div className="small text-muted"> { strDate } </div>
                <h2 className="card-title"> {post.title}  </h2>
                <p className="card-text"> {post.summary.slice(0,215)} </p>
                <Link to={`/blog/${post.slug}`} className ="btn btn-primary">Leia mais →</Link>
            </div>
        </div>
     );
}

export default FeaturedPost;