export function RoomCard({id,room}){
    return(
        <>
        <div className="group rounded-2xl border border-white/10 bg-slate-800/80 p-6 shadow-lg 
                        transition duration-300 hover:-translate-y-1 hover:border-violet-400/50
                        hover:shadow-xl hover:shadow-violet-950/30">
        <h1>{room.name}</h1>
        <p>{room.user}people</p>
        <button>Join Room</button>
      </div>
        
        </>
    )
}