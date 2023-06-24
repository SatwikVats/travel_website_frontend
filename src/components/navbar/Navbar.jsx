import "./Navbar.css";
import { useDate } from "../../context";

export const Navbar = () => {
    const { destination, dateDispatch, checkInDate, checkOutDate, guests } = useDate();

    const handleSearchClick = () => {
        dateDispatch({
            type: "OPEN_SEARCH_MODAL",
        });
    }

    return(
        <header className="heading d-flex align-center">
            <h1 className="heading-title">
                <a className="link" href="/">CheckInn</a>
            </h1>
            <div className="form-container d-flex align-center cursor-pointer shadow" onClick={handleSearchClick} >
                <span className="form-option">{destination || "Any Where"}</span>
                <span className="border-right-1px"></span>
                <span className="form-option">{
                    checkInDate && checkOutDate ? `${checkInDate.toLocaleDateString("en-US", {day: "numeric", month: "short"})} -
                    ${checkOutDate.toLocaleDateString("en-US", {day: "numeric", month: "short"})}` : "Any Week"
                }</span>
                <span className="border-right-1px"></span>
                <span className="form-option">{guests>0? `${guests} Guests`:"Add Guests"}</span>
                <span className="search material-icons-outlined">search</span>
            </div>
            <nav className="d-flex align-centre gap-large">
                <div className="nav d-flex align-center cursor-pointer">
                    <span className="material-icons profile-option menu">menu</span>
                    <span className="material-icons profile-option person">account_circle</span>
                </div>
            </nav>
        </header>
    )
}