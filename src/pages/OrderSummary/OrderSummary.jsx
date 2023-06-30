import { Fragment } from "react";
import { useDate, useHotel } from "../../context";
import "./OrderSummary.css";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {

    const navigate = useNavigate();

    const {/*guests,*/ checkInDate, checkOutDate, dateDispatch} = useDate();

    const numberOfNights = checkInDate && checkOutDate ?
    (checkOutDate.getTime()-checkInDate.getTime())/(1000*3600*24) : 0;

    const {hotel, hotelDispatch} = useHotel();
    const {image, name, address, state, rating, price} = hotel.hotel;
    //const totalPayableAmount = price? (price*numberOfNights + 200) : 1;

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
            <div className="order-summary-container d-flex direction-column align-center gap-large">
                <div className="order-summary d-flex align-center direction-column gap-large justify-space-between">
                    <div>
                        <div className="booked-check d-flex align-center">
                            <span className="booked-text">Booked</span>
                            <span className="material-icons-outlined tick">check_circle</span>
                        </div>
                        <div className="booked-hotel-info d-flex align-center gap-small justify-space-between">
                            <span className="hotel-name-adress">{name}, {address}, {state}</span>
                            <span className="rating d-flex align-center">
                                <span className="material-icons-outlined">star</span>
                                <span className="rating-number">{rating}</span>
                            </span>
                        </div>
                    </div>
                    <div className="hotel-img-container d-flex align-center">
                        <img src={image} alt={name} />
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
                <div className="btn-container d-flex align-center">
                    <button className="back-to-home-button btn-reserve btn-primary cursor" color="#fb7f2b"
                     onClick={handleBackToHomeClick}>Back to Home</button>
                </div>
            </div>
        </Fragment>
    )
}