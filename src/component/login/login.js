import { useState } from "react";
import axios from "../../axios"
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import jwt_decode from "jwt-decode";


function Login () {

  const {token,setToken} = useContext(UserContext)
 
   
    const [email,setEmail] = useState(null);
    const [password,setPassword]= useState(null);
    const [error,setError] = useState(null)
    const [redirect,setRedirect] = useState(false);

  const  handeleEmail = (e)=>{
      setEmail(e.target.value)
    }
  const   handelePassword = (e)=>{
      setPassword(e.target.value)
    }
  const handeleClick = async()=>{
    try{
      const response = await axios.post('/user/login',{
        email:email,
        password:password
      })
      const user = jwt_decode( response.data.token);
      setToken(user)
      setRedirect(true)
      
    }catch(err){
      
      setError(err.response.data.error.message)
    }
       
  }
  if(redirect){
   return <Navigate to = {'/'}/>
  }

    return ( 
        <div>
            {error && <div>{error}</div>}
            <input type="text" onChange={handeleEmail} />
            <input type="possword" onChange={handelePassword} />
            <button onClick={handeleClick}>register</button>
        </div>
     );
}

export default Login;