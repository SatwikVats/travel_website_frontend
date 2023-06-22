import "./HotelDetails.css";

export const HotelDetails = ({singleHotel}) => {
    const {hostName, hostJoinedOn, numberOfBathrooms, numberOfBeds, numberOfguest, numberOfBedrooms, numberOfStudies} = singleHotel; 
    
    return (
        <div className="hotel-details-container">
            <div className="host-details">
                <p className="host-name p">Hosted by {hostName}, Joined on {hostJoinedOn}</p>
                <span className="span">{numberOfguest} Guests,</span>
                <span className="span">{numberOfBedrooms} Bedrooms,</span>
                <span className="span">{numberOfBeds} Beds,</span>
                <span className="span">{numberOfStudies} Studies</span>
            </div>
            <div className="key-features host-details">

            </div>
        </div>
    )
}