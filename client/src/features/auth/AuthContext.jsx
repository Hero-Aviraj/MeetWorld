import {children, createContext,useContext, useState, } from "react";
 

const AuthContext=createContext();

export function AuthProvider({children}){
    const[islogedin,setIsLogedin]=useState(false);
    const [user, setUser] = useState(null);
    

    const login=(userData)=>{
        setUser(userData);
        setIsLogedin(true);
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