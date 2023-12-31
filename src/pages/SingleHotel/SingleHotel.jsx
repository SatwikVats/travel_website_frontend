import axios from "axios";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FinalPrice, HotelDetails, HotelImages, Navbar, AuthModal, Dropdown } from "../../components";
import { useAuth } from "../../context";

import "./SingleHotel.css";


export const SingleHotel = () => {
    const {id} = useParams();
    const[singleHotel, setSingleHotel] = useState({});

    const { isAuthModalOpen, isDropdownOpen} = useAuth();

    useEffect( ()=>{
        (async() => {
        try{
            const {data} = await axios.get(`https://dull-blue-reindeer-vest.cyclic.app/api/hotels/${id}`);
            setSingleHotel(data);
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    })();
    },[id]);

    const {name, state} = singleHotel;

    return (
        <Fragment>
            <Navbar/>
            
                <main className="single-hotel-page">
                    <p className="hotel-name-address">
                        {name}, {state}
                    </p>
                    <HotelImages singleHotel={singleHotel}/>
                    <div className="d-flex">
                        <HotelDetails singleHotel={singleHotel}/>
                        <FinalPrice singleHotel={singleHotel}/>
                    </div>
                </main>
                {isAuthModalOpen && <AuthModal />}
                {isDropdownOpen && <Dropdown/>}
            
        </Fragment>
    )
}