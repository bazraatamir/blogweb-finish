import postStyle from "./post.module.css";
import { Link } from 'react-router-dom';
function Post({_id,title,photo,description, createUserId}) {
    return ( 
        <div className={postStyle.post}>
            <Link to={`post/${_id}`} >
              <img className={postStyle.image} src={`http://localhost:3001/upload/${photo}`}/>
            </Link>            
            <div className={postStyle.text}>
                <Link to={`post/${_id}`}>
                 <h1>{title}</h1>
                </Link>
                <p>{description}</p>
                
            </div>
        </div>
     );
}

export default Post;