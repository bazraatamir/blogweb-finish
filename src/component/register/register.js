import { useState } from "react";
import axios from "axios"

function Register () {
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword]= useState(null);
    const [err,setError] = useState(null);
    const typeChangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const typeChangePasswor = (e)=>{
        setPassword(e.target.value)
    }
    const typeChangeName = (e)=>{
        setName(e.target.value)
    }
    const handleClick =async()=>{
        try{
            const response = await axios.post('/user',{
              userName:name,
              email:email,
              password:password
            })
            console.log(response)
          }catch(err){
            setError(err.response.data.error.message)
          }
    }
    return ( 
        <div>
            <input type="text" onChange={typeChangeName} />
            <input type="text" onChange={typeChangeEmail} />
            <input type="possword" onChange={typeChangePasswor}/>
            <button onClick={handleClick}>login</button>
        </div>
     );
}

export default Register;