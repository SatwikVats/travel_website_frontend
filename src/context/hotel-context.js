import { createContext, useContext, useReducer, useState } from "react";
import { HotelReducer } from "../reducer";

const initialValue = {
    /*hotelImage: "",
    hotelName:"", 
    hotelAddress:"", 
    hotelState:"", 
    hotelRating:"", 
    hotelPrice:"",*/
    hotel: {}
}

const HotelContext = createContext(initialValue);

const HotelProvider = ({children}) => {

    //const [{hotelImage, hotelName, hotelAddress, hotelState, hotelRating, hotelPrice}, hotelDispatch]
    // = useReducer(HotelReducer, initialValue);
    const [hotel, hotelDispatch] = useReducer(HotelReducer, initialValue);
    
    return (
        <HotelContext.Provider value={{hotel, hotelDispatch}}>
            {children}
        </HotelContext.Provider>
    )
}

const useHotel = () => useContext(HotelContext);

export { useHotel, HotelProvider };