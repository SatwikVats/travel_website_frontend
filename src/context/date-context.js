import { createContext, useContext, useReducer } from "react";
import { DateReducer } from "../reducer";

const initialState = {
    checkInDate: null,
    checkOutDate: null,
    isSearchModalOpen: false
}

const DateContext = createContext(initialState);

const DateProvider = ({children}) => {
    const [{checkInDate, checkOutDate, isSearchModalOpen}, dateDispatch ] = useReducer(DateReducer, initialState);
    return <DateContext.Provider value={{checkInDate, checkOutDate, isSearchModalOpen, dateDispatch}}>{children}</DateContext.Provider>;
};

const useDate = () => useContext(DateContext);

export {useDate, DateProvider};