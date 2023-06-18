import { Fragment } from "react";
import { Navbar, HotelCard } from "../../components";
import "./Home.css";

export const Home = () => {
    return(
        <Fragment>
            <Navbar />
            <main className="main">
                <HotelCard />
            </main>

        </Fragment>
        
    )
}