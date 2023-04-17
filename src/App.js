import Header from './component/header/header';
import {Home} from "./component/home/home";
import Create from "./component/create/create"
import Register from './component/register/register';
import Login  from './component/login/login';
import PostDetails from './component/postdetail/postDetail';
import Mypost from './component/myPosts/myPosts';
import style from './App.module.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './component/context/userContext';
function App() {
  
const [token,setToken]=useState('');


  return (
  <BrowserRouter>
    <div className={style.App}>
    <UserContext.Provider value={{token,setToken}}>
    <Header  />

    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Create' element={<Create/>}/>
      <Route exact path='/Mypost' element={<Mypost />}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/Login' element={<Login  />}/>
      <Route exact path='/post/:id' element = {<PostDetails/>}/>
    </Routes>
    </UserContext.Provider>
   
      
   </div>
  </BrowserRouter>
  
  
  );
}

export default App;
