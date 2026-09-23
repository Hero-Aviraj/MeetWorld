import profileIcon from "../assets/nav_pngs/profile_icon.png";
import { useState } from "react"
import { Link } from "react-router-dom"
export function Navbar(){
const[showfeature,setShowfeature]=useState(false)
const[showmore,setShowmore]=useState(false)
const[mobileOpen,setMobileOpen]=useState(false)
  return(
    <>
    
        <nav className="w-full px-4 md:px-8 py-2 flex items-center justify-between bg-emerald-200 relative z-50">
           <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-gray-900"><span>🌍</span> VibeTalk</Link>

           <div className="hidden md:flex items-center gap-12 text-gray-800 font-medium">
              <Link to="/Discover" className="hover:text-red-400 transition-colors duration-200" >Discover</Link>
        <div> 
          <div className="relative ">
          <button onClick={()=>setShowfeature(!showfeature)}
           className="flex  items-center gap-1 hover:text-red-400 transition-colors duration-200 ">
            Features <span className={`text-xs transition-transform duration-200 ${showfeature? "rotate-180" :"" }`}>▾</span></button>
          {showfeature &&(
            <ul className={`absolute top-full mt-3 bg-blue-200 shadow-lg rounded-lg py-2 w-40 origin-top transition-all duration-200 
            ${showfeature ? " opacity-100 scale-100 translate-y-0":"opacity-0 scale-95 -translate-y-1 pointer-events-none "}`}>

            <li><Link to="/Voiceroom" className="block px-2 py-2 hover:bg-slate-300 transition-colors">VoiceRoom</Link></li>
            <li><Link to="/Chat" className="block px-2 py-2 hover:bg-slate-300 transition-colors">Chat</Link></li>
            <li><Link to="/Videocall" className="block px-2 py-2 hover:bg-slate-300 transition-colors">Videocall</Link></li>
          </ul>
          )}
        </div> 
          </div>
       <div> 
        <div className="relative">
          <button onClick={()=>setShowmore(!showmore)} 
          className="flex items-center gap-1 hover:text-red-400 transition-colors duration-200 ">
            More <span className={`text-xs transition-transform duration-200 ${showmore? "rotate-180" :"" }`}>▾</span></button>
          {showmore && ( 
            <ul className={`absolute top-full mt-3 left-0 bg-blue-200 shadow-lg rounded-lg py-2 w-40 rigin-top transition-all duration-200 ${
              showmore ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}
             `}>
            <li><Link to="/About" className="block px-2 py-2 hover:bg-slate-300 transition-colors">About This App</Link></li>
            <li><Link to="/Working" className="block px-2 py-2 hover:bg-slate-300 transition-colors">working</Link></li>
          </ul>
          )}
        </div> 
          </div>
          
          </div>

           <div className="hidden md:flex items-center gap-6">
            <Link to="Notification"
            className="hover: bg-slate-400 font-medium px-2 py-1 rounded transition-colors"
            >Notification</Link>
            <Link to="/Login"><img src={profileIcon} alt="Profile"
             className="pt-2 h-8 rounded-lg hover:scale-105 transition-transform duration-200" /></Link>
           </div>
{/*hambarger*/}

           { <button
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button> }


      { <div
        className={`md:hidden absolute top-full left-0 w-full bg-emerald-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-gray-800 font-medium">
          <Link to="/Login" onClick={()=>setMobileOpen(false)}><img src={profileIcon} alt="profile" className="h-8 rounded-lg" /></Link>
          <Link to="/Discover" onClick={() => setMobileOpen(false)}>Discover</Link>

          <div>
            <button onClick={() => setShowfeature(!showfeature)} className="flex items-center gap-1">
              Features <span className={`text-xs transition-transform duration-200 ${showfeature ? "rotate-180" : ""}`}>▾</span>
            </button>
            <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-200 ${showfeature ? "max-h-40 mt-2" : "max-h-0"}`}>
              <Link to="/Voiceroom" className="py-1" onClick={() => setMobileOpen(false)}>VoiceRoom</Link>
              <Link to="/Chat" className="py-1" onClick={() => setMobileOpen(false)}>Chat</Link>
              <Link to="/Videocall" className="py-1" onClick={() => setMobileOpen(false)}>Videocall</Link>
            </div>
          </div>

          <div>
            <button onClick={() => setShowmore(!showmore)} className="flex items-center gap-1">
              More <span className={`text-xs transition-transform duration-200 ${showmore ? "rotate-180" : ""}`}>▾</span>
            </button>
            <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-200 ${showmore ? "max-h-40 mt-2" : "max-h-0"}`}>
              <Link to="/About" className="py-1" onClick={() => setMobileOpen(false)}>About This App</Link>
              <Link to="/Working" className="py-1" onClick={() => setMobileOpen(false)}>working</Link>
            </div>
          </div>
          <Link to="/Notification" onClick={() => setMobileOpen(false)}>Notification</Link>
        </div>
      </div> }
        </nav>
    
    </>
  )

}
