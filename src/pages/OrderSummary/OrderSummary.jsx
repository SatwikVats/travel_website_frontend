import { Fragment } from "react";
import { useDate, useHotel } from "../../context";
import "./OrderSummary.css";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {

    const navigate = useNavigate();

    const {guests, checkInDate, checkOutDate, dateDispatch} = useDate();

    const numberOfNights = checkInDate && checkOutDate ?
    (checkOutDate.getTime()-checkInDate.getTime())/(1000*3600*24) : 0;

    const {hotel, hotelDispatch} = useHotel();
    const {image, name, address, state, rating, price} = hotel.hotel;
    const totalPayableAmount = price? (price*numberOfNights + 200) : 1;

    const handleBackToHomeClick = () => {
        hotelDispatch({
            type: "CLEAR_HOTEL_BOOKING",
            payload: hotel,
        });
        dateDispatch({
            type: "CLEAR_ALL",
        });
        navigate("/");
    }

    return(
        <Fragment>
            <div className="order-summary d-flex align-center direction-column gap-large">
                <div>
                    <span>Booked</span>
                    <span>{name}, {address}, {state}</span>
                    <span className="d-flex align-center">
                        <span className="material-icons-outlined">star</span>
                        <span>{rating}</span>
                    </span>
                </div>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div className="billing d-flex align-center direction-column gap-small">
                    <div>
                        <span>{guests} Guests</span>
                    </div>
                    <div>
                        <span>Price: Rs.{price}</span>
                    </div>
                    <div>
                        <span>Total Amount Paid: Rs.{totalPayableAmount}</span>
                    </div>
                </div>
            </div>
            <div className="back-to-home-button">
                <button onClick={handleBackToHomeClick}>Back to Home</button>
            </div>
        </Fragment>
    )
}