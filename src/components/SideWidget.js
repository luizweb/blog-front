import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FaKaggle} from 'react-icons/fa';




function SideWidget() {
    return ( 
        <div className="card mb-4">
            <div className="card-header">Web</div>
            <div className="card-body">
                <div className="d-flex">
                    <div className="mx-2"><h3><a href="https://www.instagram.com/luiz_agsimoes/" style={{cursor:"pointer"}} rel="noopener noreferrer" target="_blank"><BsInstagram className="text-black-50"/></a></h3></div>
                    <div className="mx-2"><h3><a href="https://www.linkedin.com/in/luiz-simoes-78408822a/" style={{cursor:"pointer"}} rel="noopener noreferrer" target="_blank"><BsLinkedin className="text-black-50" /></a></h3></div>
                    <div className="mx-2"><h3><a href="https://github.com/luizweb" style={{cursor:"pointer"}} rel="noopener noreferrer" target="_blank"><BsGithub className="text-black-50" /></a></h3></div>
                    <div className="mx-2"><h3><a href="https://www.kaggle.com/luizweb" style={{cursor:"pointer"}} rel="noopener noreferrer" target="_blank"><FaKaggle className="text-black-50" /></a></h3></div>
                </div>
            </div>
        </div>
     );
}

export default SideWidget;