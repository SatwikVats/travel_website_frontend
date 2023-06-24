import "./FinalPrice.css";

export const FinalPrice = ({singleHotel}) => {
    const {price, rating} =singleHotel;
    
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
                    </div>
                    <div className="checkin loc-container">
                        <label>Check Out</label>
                    </div>
                </div>
                <div className="guests gutter-sm">
                    <p>GUESTS</p>
                    <span>2 Guests</span>
                </div>
            </div>
            <div>
                <button className="button btn-reserve btn-primary cursor" color="#fb7f2b">Reserve</button>
            </div>
            <div className="price-distribution d-flex direction-column">
                <div className="final-price d-flex align-center justify-space-between">
                    <span>Rs. {price} X 2 Nights</span>
                    <span>Rs. {price*2}</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span>Service Fee</span>
                    <span>Rs. 200</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span>Total</span>
                    <span>Rs. {price*2 + 200}</span>
                </div>
            </div>
        </div>
    )
}