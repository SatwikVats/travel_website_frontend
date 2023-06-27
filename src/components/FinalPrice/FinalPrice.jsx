import "./FinalPrice.css";
import {useDate, useHotel} from "../../context";
import {DateSelector} from "../DateSelector/DateSelector";
import { useNavigate } from "react-router-dom";

export const FinalPrice = ({singleHotel}) => {
    const {_id, price, rating, numberOfguest} =singleHotel;
    const {guests, dateDispatch, checkInDate, checkOutDate} = useDate();
    const { hotelDispatch} = useHotel();

    const numberOfNights = checkInDate && checkOutDate ?
    (checkOutDate.getTime()-checkInDate.getTime())/(1000*3600*24) : 0;

    const navigate = useNavigate();

    const handleGuestChange = (event) => {
        dateDispatch({
            type: "GUESTS",
            payload: event.target.value,
        });
    }

    const handleReserveClick = () => {
        hotelDispatch({
            type: "SET_HOTEL_BOOKING",
            payload: singleHotel,
        });
        navigate(`/confirm-booking/stay/:${_id}`);
    }
    
    return(
        <div className="price-details-container d-flex direction-column gap shadow">
            <div className="price-rating d-flex align-center justify-space-between">
                <p><span className="fs-bold fs-large">Rs. {price} </span>night</p>
                <span className="rating d-flex align-center">
                    <span className="material-icons-outlined">star</span>
                    <span className="fs-bold fs-large">{rating}</span>
                </span>
            </div>
            <div className="d-flex direction-column">
                <div className="grid-container-two-col selected-dates">
                    <div className="checkin loc-container">
                        <label>Check In</label>
                        <DateSelector checkInType="in"/>
                    </div>
                    <div className="checkin loc-container">
                        <label>Check Out</label>
                        <DateSelector checkInType="out"/>
                    </div>
                </div>
                <div className="guests gutter-sm">
                    <p>GUESTS</p>{
                        guests>numberOfguest ? <div><input className="guest-count-input" type="number" 
                        placeholder="Add Guests" value={guests} max={numberOfguest}  min={1} onChange={handleGuestChange}/>
                        <span className="guests-exceeded-warning">(Maximum {numberOfguest} Guests allowed!)</span></div> : 
                        (<input className="guest-count-input" type="number" placeholder="Add Guests" 
                        value={guests} max={numberOfguest}  min={1} onChange={handleGuestChange}/>)
                    }
                </div>
            </div>
            <div>
                <button className="button btn-reserve btn-primary cursor" color="#fb7f2b" 
                onClick={handleReserveClick} disabled={checkInDate && checkOutDate && guests>0? false: true}>Reserve</button>
            </div>
            <div className="price-distribution d-flex direction-column">
                <div className="final-price d-flex align-center justify-space-between">
                    <span>Rs. {price} X {numberOfNights} Nights</span>
                    <span>Rs. {price*numberOfNights}</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span>Service Fee</span>
                    <span>Rs. 200</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span>Total</span>
                    <span>Rs. {price*numberOfNights + 200}</span>
                </div>
            </div>
        </div>
    )
}