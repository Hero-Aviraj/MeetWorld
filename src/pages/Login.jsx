import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
function Login(){
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
  function handleSubmit(e){
   e.preventDefault();
   console.log("hello");
   
  }
    return(
        <>
        <Navbar/>
        <div className="l">

           <div>
            <form onSubmit={handleSubmit}>
             <div>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} 
                placeholder="email" required/>
             </div>
             <div>
               <label htmlFor="password">password</label>
               <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                placeholder="password" required/>
             </div>
             <button onSubmit={handleSubmit}>login</button>
            </form>
              <p>Don't have an account?<Link to="/Signup">Signup</Link></p>
           </div>

        </div>
        </>
    )
   
}
export default Login;