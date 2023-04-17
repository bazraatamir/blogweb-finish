import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "../../axios";
function PostDetails() {
    const {id} = useParams()
    console.log(id)
    const [post,setPost] =useState(null);
    useEffect(()=>{
        async function fetchData() {
                const response =await axios.get(`/post/${id}`)
                const data = response.data.data;
                setPost(data);
              return data
          }
          fetchData();
        
    },[])
    console.log(post)
    return ( 
        <div>
            PostDetails
        </div>
     );
}

export default PostDetails ;