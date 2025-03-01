import React from "react"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Footer from "../components/Footer"


function Home(){
    return(
        <div>
        <Navbar></Navbar>
            <h1>Welcome to E-Kart</h1>
            <Slider></Slider>
            <div>
              <Footer></Footer>
            </div>
            <div>
            <h2>To get in signed in  please click on login Text given below</h2>
             <a href="/signup">Sign_up</a>
             </div>
        </div>
    )
}
export default Home