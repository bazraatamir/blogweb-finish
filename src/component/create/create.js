import { useState } from "react";
import axios from "../../axios";

function Create() {
    const [title,setTitle]=useState('')
    const [file,setFile] = useState('');
    const[caption,setCaption]= useState('')

    
    const createNewPost = async(e)=>{
        e.preventDefault();
        // console.log(title,file,caption)
    
    var formData = new FormData();
    formData.set('title', title);
    formData.set('file',file)
    formData.set('description',caption)
        console.log(formData)
   try{
    const data = await axios.post('/post',formData);
    // console.log(data)
   }catch(err){
    console.log(err)
   }
   
    }
    return ( 
    <div>
        <form onSubmit={createNewPost}>
            <input type="text" onChange = {(e)=>{setTitle(e.target.value)}}/>
            <input type="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
            <textarea onChange={(e)=>{setCaption(e.target.value)}} ></textarea>
            <button>create</button>
        </form>
            
        
    </div> );
}

export default Create;

