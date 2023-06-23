import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

import "./DateSelector.css";
import { useDate } from "../../context";

export const DateSelector = ({placeholder, checkInType}) => {
    //const [currentDate, setCurrentDate] = useState(new Date());
    const { checkInDate, checkOutDate, dateDispatch } = useDate();

    const handleDateChange = (date) => {
        dateDispatch({
            type: checkInType === "in"? "CHECK_IN" : "CHECK_OUT",
            payload: date,
        })

    }

    console.log({checkInDate, checkOutDate});

    return(
        <ReactDatePicker
            selected={checkInType==="in"? checkInDate : checkOutDate}
            onChange={date => handleDateChange(date)}
            className="search-dest input" 
            dateFormat="dd/MM/yyyy" 
            placeholderText="Add Dates"
            closeOnScroll={true}/>
    )
}