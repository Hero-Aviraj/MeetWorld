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
        
        <div className="flex min-h-screen bg-indigo-900 items-center justify-center bg-cover bg-center">
         <div>
            
         </div>
           <div  className="backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-xl
           px-8 py-10 w-full max-w-sm flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6" drop-shadow>Login</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">

             <div className=" flex flex-col gap-1">
                <label htmlFor="email" className="text-sm  ">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} 
                placeholder="email" required className=" border rounded px-3 py-2 outline-none focus:ring"/>
             </div>

             <div className="flex flex-col gap-1">
               <label htmlFor="password" >password</label>
               <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                placeholder="password" required className=" border rounded px-3 py-2 outline-none focus:ring"/>
             </div>

             <button onSubmit={handleSubmit} className="mt-2 bg-white/49 hover:bg-white active:scale-[0.98]
             text-gray-800 font-semibold rounded-lg py-2 transition-colors duration-300 hover:scale-[1.02]">Login</button>
            </form>

              <div className="mt-4 text-sm"><p>Don't have an account?{" "}<Link to="/Signup" className="font-semibold underline hover:text-white/100">Signup</Link></p></div>
           </div>

        </div>
        </>
    )
   
}
export default Login;