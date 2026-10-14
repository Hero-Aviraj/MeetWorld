import { RoomCard } from "./RoomCard";

function RoomList(){
  

  const rooms=[
    {id:1, name:"singing room", user:5},
    {id:2, name:"singing room", user:9},
    {id:3, name:"gaming room", user:6}
  
  ];
  // if(!rooms.length){
  //   return(
  //     <p>
  //       No rooms available right now
  //     </p>
  //   )
  //}
  return(
   <>
     <div className="min-h-screen bg-slate-900 px-4 pt-20 sm:px-6 lg:px-10">
     <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
       {rooms.map((room)=>(
      <RoomCard key={room.id} room={room}/>
       ))}
     </div>
    </div>
   </>
  )
  
}
 export default RoomList;













































// import RoomCard from "./Roomcard";

// function RoomList() {

//   const rooms = [
//     { id: 1, name: "Gaming Room", users: 12 },
//     { id: 2, name: "Music Room", users: 8 },
//     { id: 3, name: "Study Room", users: 5 },
//     { id: 4, name: "Coding Room", users: 15 },
//     { id: 5, name: "Chill Room", users: 20 }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      
//       {rooms.map((room) => (
//         <RoomCard key={room.id} room={room} />
//       ))}

//     </div>
//   );
// }

// export default RoomList;