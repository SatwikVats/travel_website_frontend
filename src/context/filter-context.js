import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer";

const initialValue = {
    isFilterModalOpen: false,
    priceRange: [300, 15000],
}

const FilterContext = createContext(initialValue);

const FilterProvider = ({children}) => {
    const [{isFilterModalOpen, priceRange}, filterDispatch] = useReducer(FilterReducer, initialValue);

    return(
        <FilterContext.Provider value={{isFilterModalOpen, priceRange, filterDispatch}} >
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export {FilterProvider, useFilter};