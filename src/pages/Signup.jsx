import { useState } from "react"
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
  <div className="signup_container">
    <h2 >Signup</h2>
    <div>
      <form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="name" value={name} 
        onChange={(e)=>setName(e.target.value)} required />
       </div>
       <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" value={email} 
        onChange={(e)=>setEmail(e.target.value)} required />
       </div>
       <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" value={password} 
        onChange={(e)=>setPassword(e.target.value)} required/>
       </div>
       <div>
         <label htmlFor="confirmpassword">Confirm</label>
        <input type="password" placeholder="password" value={confpass} 
        onChange={(e)=>setConfpass(e.target.value)} required/>

        {error && <p>{error}</p>}
       </div>
       <button onSubmit={handleSubmit}>SignUp</button>
       </form>
    </div>
  </div>
  </>
    )
  }
