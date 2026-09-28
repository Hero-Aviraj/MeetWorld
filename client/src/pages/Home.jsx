import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import heroicon from "../assets/page_png/hero.png"
import Login from "./Login";

export default function Home(){

    return(
        <>
        <Navbar/>
        <main className="pt-10">
        <section className="flex  flex-col md:flex-row min-h-screen justify-around  bg-indigo-200/40 md:px-20 py-20 ">
           
            <div className="mt-8">
             <div>
                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">Meet the{" "}
                    <span className="text-purple-600">World.</span>
                <br/>
                One conversation away.</h1> 
              <p className="text-[1.05rem] leading-relaxed text-gray-700 max-w-[42ch] mb-6 lg:text-left">Video call, voice room, or text — matched instantly with someone
                from another part of the world with different culture and background.</p>
                </div>
              <div className="flex flex-wrap gap-4 ">
               <Link to="/chat" className="mt-2 font-semibold  px-5 py-3.5 rounded-[10px] 
               bg-indigo-400 hover:bg-white hover:-translate-y-0.5 transition-transform">Start a conversation</Link> 
               
                <Link to="/voiceroom"className="mt-2 font-semibold  px-5 py-3.5 rounded-[10px] 
               bg-indigo-400 hover:bg-white hover:-translate-y-0.5 transition-transform">Browse voice rooms</Link>
              </div>
            </div>
           
           <div className="">
            <img src={heroicon} alt="heroimg" className="w-full max-w-lg" />

           </div>
           </section>
           <section className="py-20 px-6">
             <div>
                <h1>How Meetworld work</h1>
             </div>
           </section>
           </main>
        </>
    )
}