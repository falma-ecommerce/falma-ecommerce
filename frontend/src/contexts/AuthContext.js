import { createContext, useState, useEffect } from 'react';


const AuthContext = createContext({});

function AuthProvider({children}){
    const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
        username:"",
        loggedIn:false
    };   
    const [loggedIn, setLoggedIn] = useState(loginSession["loggedIn"]);
    const [username, setUsername] = useState(loginSession["username"]);
    

    useEffect(() => {
    sessionStorage.setItem("login", JSON.stringify({username:username,  loggedIn:loggedIn}))
    }, [username, loggedIn])

    //function defined to handle the login
    const handleLogin = (isLoggedIn, username ) => {
        
        setLoggedIn(isLoggedIn);
        isLoggedIn ? setUsername(username): setUsername("");
    }
    return (
         <AuthContext.Provider value={{loggedIn, username, handleLogin}}>
            {children}
         </AuthContext.Provider>
    )}
export {AuthContext, AuthProvider}