import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../reducer";

const initialValue = {
    isAuthModalOpen: false,
    name: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    accessToken: "",
    username: "",
    selectedTab: "login"
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({children}) => {
    const [{isAuthModalOpen, name, email, password, number, accessToken, username, selectedTab, confirmPassword}, authDispatch] = useReducer(AuthReducer, initialValue);

    return(
        <AuthContext.Provider value={{isAuthModalOpen, name, email, password, number, accessToken, username, selectedTab, confirmPassword, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};