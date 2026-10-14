import {children, createContext,useContext, useState, } from "react";
import { loginRequest } from "./authApi"; 

const AuthContext=createContext();

export function AuthProvider({children}){
    const[islogedin,setIsLogedin]=useState(false);
    const [user, setUser] = useState(null);
    

    const login=async(credentials)=>{
        const data=await loginRequest(credentials);
        setUser(userData);
        setIsLogedin(true);
        localStorage.setItem("token",data.token)
    }
    const logout=()=>{
        setUser(null);
        setIsLogedin(false);
    }

    return(
        <AuthContext.Provider value={{islogedin,user,login,logout}}>
           {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext);