 import React from "react";

 function Login(){
 return(
    <div>
<form class="sub-container">
 <div>
    <h1>Wellcome to Login Page</h1>
    <label htmlFor="email"> Your E-mail:</label>
    <input id="email" type="email" placeholder="Your mail address"></input>
 </div>
 <br></br>
 <div>
    <label htmlFor="password"> Set Password:</label>
    <input id="password" type="password" placeholder="Enter password"></input>
 </div>
 <button>Submit</button>
</form>
    </div>
 )
 }
 export default Login