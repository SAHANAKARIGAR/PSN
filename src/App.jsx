import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import React from "react";
import'./App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './Pages/About'
import Home from './Pages/Home'  
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App=()=>{
  return(
    <div>
       
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}
export default App