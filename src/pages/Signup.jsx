import { useState } from "react"
import { Link } from "react-router-dom";
export default function Signup(){
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("");
  const[confpass,setConfpass]=useState("")
  const [error,setError]=useState("")
   function handleSubmit(e){
     e.preventDefault();
    if(password !== confpass){
      setError("password does not patch")
       return;
    }
    setError("");
  }
    return(
  <>
  <div className=" flex min-h-screen bg-green-700 items-center ">

  <div className="flex flex-col border rounded-xl bg-white/30 items-center justify-center m-4 py-8  ">
    <h2 className=" tex-sm font-bold items-center" >Signup</h2>
    <div className="flex items-center px-8 py-7 ">

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">

       <div className="flex flex-col gap-1">
        <label htmlFor="name" className="tex-sm">Name</label>
        <input type="text" placeholder="name" value={name} 
        onChange={(e)=>setName(e.target.value)} required className=" border rounded px-3 py-2 outline-none focus:ring" />
       </div>

       <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" value={email} 
        onChange={(e)=>setEmail(e.target.value)} required className="border rounded px-3 py-2 outline-none focus:ring"/>
       </div>

       <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" value={password} 
        onChange={(e)=>setPassword(e.target.value)} required className="border rounded px-3 py-2 outline-none focus:ring"/>
       </div>

       <div className="flex flex-col gap-1">
         <label htmlFor="confirmpassword">Confirm</label>
        <input type="password" placeholder="password" value={confpass} 
        onChange={(e)=>setConfpass(e.target.value)} required className="border rounded px-3 py-2 outline-none focus:ring "/>

        {error && <p>{error}</p>}
       </div>
       <button onSubmit={handleSubmit} className="mt-2 bg-white/40 hover:bg-white/60 active:scale-[0.98]
       text-gray-800 font-semibold rounded-lg py-2 transition-colors duration-300 hover:scale-[1.02]">SignUp</button>
       </form>
       <Link to="/Login">login</Link>
    </div>
  </div>
  </div>
  </>
    )
  }
