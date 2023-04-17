import { useEffect, useState } from "react";
import Post from "../post/post";
import axios from "../../axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";


function Mypost() {
    const[myPosts,setMyposts] =useState(null);
    const {token,setToken} = useContext(UserContext)
    useEffect(()=>{
        async function fetchData() {
                const response =await axios.get("/post")
                const data = response.data.data;
                const myData =  data.filter((el)=>{
                    return el.createUserId ==token.id
                })
                setMyposts(myData)
              return data
          }
          fetchData();
        
    },[])
    return ( 
    <div>
        <div>{token.id}</div>
         {myPosts &&  myPosts.map(post=>(
                <Post {...post}/>
            ))}
            <Post />
    </div> 
    );
}

export default Mypost;