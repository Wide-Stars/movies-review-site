/* eslint-disable */ import React, { useState, useEffect } from 'react';


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});



export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);




    const loginHandler = (email, password) => {

    };

    const logoutHandler = () => {

    };

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;