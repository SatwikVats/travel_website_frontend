import "./HotelCard.css";

export const HotelCard = () => {
    return(
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div>
                <img className="img" src="https://a0.muscache.com/im/pictures/ae654a2a-a0a4-42cd-8d1f-f8cc97c005cc.jpg?im_w=720" alt="hotelcard" />
                <div className="hotelcard-details">
                    <div className="d-flex align-center">
                        <span className="location">Bir, Himachal Pradesh</span>
                        <span className="rating d-flex align-center">
                            <span class="material-icons-outlined">star</span>
                            <span>4.3</span>
                        </span>
                    </div>                  
                    <p className="hotel-name">Sukoon Baag</p>
                    <p className="price details">
                        <span className="price">Rs. 3500</span>
                        <span className="night">night</span>
                    </p>
                </div>               
            </div>            
            <button className="button btn-wishlist absolute">
                <span class="material-icons favorite cursor">favorite</span>
            </button>            
        </div>
    )
}