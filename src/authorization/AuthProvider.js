import React from "react";
import {users} from "../mocks/Users"
import {useNavigate} from "react-router-dom";

function AuthProvider({children}) {
    const [user, setUser] = React.useState(null);
    let navigate = useNavigate();

    const signIn = (user, callback) => {
        mockupAuth.login(user);
        setUser(user);
        callback();
    };

    const changeUser = (id) => {
        setUser(users.find(u => u.id === id));
    }

    const logout = () => {
        mockupAuth.logout();
        setUser(null);
        navigate("/login")
    };

    const value = {user, users, signIn, logout, changeUser};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const AuthContext = React.createContext(null);

function useAuth() {
    return React.useContext(AuthContext);
}

const mockupAuth = {
    isAuthenticated: false,
    login() {
        this.isAuthenticated = true;
    },
    logout() {
        this.isAuthenticated = false;
    }
};

export {useAuth, AuthProvider};
