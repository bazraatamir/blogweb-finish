import React from 'react';
import style from"./style.module.css";
import { Link } from 'react-router-dom';
import axios from "../../axios"
import { useContext } from 'react';
import { UserContext } from '../context/userContext';


function Header () {
    const {token,setToken} = useContext(UserContext)

    const Logout = () =>{
      axios.post("/user/logout")
    }
    return (  
    <div className={style.header}>
        <h1 >The blog</h1>
        <div className={style.toolBar}>
            {
                token.id?
              (  <>
                     <Link to="/" >home</Link>
                    <Link to="/Create" >Create</Link>
                    <Link to="/Mypost" >My post</Link>
                    <a href='/' onClick={Logout}>logout</a>
                    
                </>)
                :
              (<>
                <Link to="/" >home</Link>
                <Link to="/register">reqister</Link>
                <Link to="/Login">Login</Link>
              </>)
            }
           
           
           
        </div>
        
    </div>
    );
}

export default Header;