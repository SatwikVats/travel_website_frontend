import axios from "axios";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HotelImages, Navbar } from "../../components";

import "./SingleHotel.css";

export const SingleHotel = () => {
    const {id} = useParams();
    const[singleHotel, setSingleHotel] = useState({});

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
            </main>
        </Fragment>
    )
}