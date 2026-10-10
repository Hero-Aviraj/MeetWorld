import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './features/auth/Login'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Voiceroom from "./pages/Voiceroom";
import RoomList from "./features/rooms/RoomList";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./features/auth/AuthContext";

function App() {
  
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>}/>
      <Route path ="/Signup" element={<Signup/>} />
      <Route path="/RoomList" element={<RoomList/>} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}   
export default App
