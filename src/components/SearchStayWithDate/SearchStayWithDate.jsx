import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";

export const SearchStayWithDate = () => {
    return(
        <div className="destination-container">
            <div className="destination-options d-flex align-center absolute">
                <div className="location-container">
                    <label className="label">Where</label>
                    <input className="input search-dest" placeholder="Search Destination"/>
                </div>
                <div className="location-container">
                    <label className="label">CheckIn</label>
                    <DateSelector checkInType="in" />
                </div>
                <div className="location-container">
                    <label className="label">CheckOut</label>
                    <DateSelector checkInType="out"/>
                </div>
                <div className="location-container">
                    <label className="label">No. of Guests</label>
                    <input className="input search-dest" placeholder="Add Guests"/>
                </div>
                <div className="search-container d-flex align-center">
                    <span className="material-icons-outlined">search</span>
                    <span>Search</span>
                </div>
            </div>
        </div>
    )
}