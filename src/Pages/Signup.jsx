 import React from "react";

 function Signup(){
 return(
    <div>
      

<form class ="container">
 <div>
 <h1>Wellcome to Login Page</h1>
    <label htmlFor="name"> Your Good Name:</label>
    <input id="name" type="text" placeholder="Your name"></input>
 </div>
 <br></br>
 <div>
    <label htmlFor="email"> Your E-mail:</label>
    <input id="email" type="email" placeholder="Your mail address"></input>
 </div>
 <br></br>
 <div>
    <label htmlFor="password"> Set Password:</label>
    <input id="password" type="password" placeholder="Enter password"></input>
 </div>
 <br></br><div>
    <label htmlFor="contactnum"> Contact Number:</label>
    <input id="contactnum" type="text" placeholder="Phone Number"></input>
 </div>
 <br></br>
 <button>Submit</button>
 <h3> If you already have an account please login</h3>
 <a href="/login">Log-in</a>
</form>
    </div>
 )
 }
 export default Signup