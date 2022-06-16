import React,{useContext,useState,useEffect} from "react";
import { useNavigate } from "react-router";
import { auth } from '../firebase';


const AuthContext = React.createContext();

export const useAuth=()=>useContext(AuthContext);

export const AuthProvider = ({children})=>{
    const [load,setLoad] = useState(true);
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    
    useEffect(()=>{
        auth.onAuthStateChanged(
            function(user){
            setUser(user);
            setLoad(false);
            if(user) navigate("/chats")
            else navigate("/")
        })
    },[user,navigate]);

    const value = {user};

    return(
        <AuthContext.Provider value={value}>
            {!load && children}
        </AuthContext.Provider>
    )
}