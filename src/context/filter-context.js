import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer";

const initialValue = {
    isFilterModalOpen: false,
    priceRange: [300, 15000],
    noOfBathrooms: "Any",
    noOfBedrooms: "Any",
    noOfBeds: "Any",
    propertyType: "Any",
    traveloRating: "1"
}

const FilterContext = createContext(initialValue);

const FilterProvider = ({children}) => {
    const [{isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, traveloRating}, filterDispatch] = useReducer(FilterReducer, initialValue);

    return(
        <FilterContext.Provider value={{isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms,
         noOfBeds, propertyType, traveloRating, filterDispatch}} >
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export {FilterProvider, useFilter};