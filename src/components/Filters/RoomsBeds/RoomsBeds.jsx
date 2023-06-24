export const RoomsBeds = () => {
    const numberOfAmenities = ["Any", "1", "2", "3", "4", "5+"];

    return(
        <div className="filter-container">
            <span className="filter-label">Rooms And Beds</span>
            <div className="d-flex align-center gap-large">
                <div className="d-flex direction-column gap">
                    <span className="span-label">Bedrooms</span> 
                    <span className="span-label">Beds</span> 
                    <span className="span-label">Bathrooms</span>
                </div>
                <div className="d-flex direction-column gap">
                    <div>
                        {
                            numberOfAmenities.map((number)=>
                            <span
                            className="span-label amenity-count align-center justify-center cursor-pointer on-hover"
                            key={number}>{number}</span>)
                        }
                    </div>
                    <div>
                        {
                            numberOfAmenities.map((number)=>
                            <span 
                            className="span-label amenity-count align-center justify-center cursor-pointer on-hover"
                            key={number}>{number}</span>)
                        }
                    </div>
                    <div>
                        {
                            numberOfAmenities.map((number)=>
                            <span 
                            className="span-label amenity-count align-center justify-center cursor-pointer on-hover"
                            key={number}>{number}</span>)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
};