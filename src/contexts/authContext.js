import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {
    
    const [loggedInUser, setLoggedInUser] = useState({ token: "", user: {} });

    useEffect(() => {
        const loggedInUserJSON = localStorage.getItem("loggedInUser");
        const parsedLoggedInUser = JSON.parse(loggedInUserJSON || '""');

        if (parsedLoggedInUser.token) {
            setLoggedInUser(parsedLoggedInUser);
        } else {
            setLoggedInUser(null);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {props.children}
        </AuthContext.Provider>
        );
}

export {AuthContext, AuthContextComponent};