import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './features/auth/Login'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Voiceroom from "./pages/Voiceroom";
import RoomList from "./features/rooms/RoomList";


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>}/>
      <Route path ="/Signup" element={<Signup/>} />
      <Route path="/RoomList" element={<RoomList/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}   
export default App
