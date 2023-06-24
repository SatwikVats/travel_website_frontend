import { Fragment, useEffect, useState } from "react";
import { Navbar} from "../../components/navbar/Navbar";
import { HotelCard } from "../../components";
import { useDate, useCategory } from "../../context";

import axios from "axios";

export const SearchResult = () => {

    const {destination} = useDate();
    const {hotelCategory} = useCategory();
    const [hotels, setHotels] = useState([]);

    useEffect(()=>{
        (async () => {
            try{
                const {data} = await axios.get(`https://dull-blue-reindeer-vest.cyclic.app/api/hotels?category=${hotelCategory}`);
                setHotels(data);
            }
            catch(err){
                console.log(err);
            }
        })();
    }, [destination]);

    const filteredSearchResults = hotels.filter(({address, city, state})=> 
    address.toLowerCase()===destination.toLowerCase() ||
    city.toLowerCase()===destination.toLowerCase() ||
    state.toLowerCase()===destination.toLowerCase());

    console.log(filteredSearchResults);


    return(
        <Fragment>
            <Navbar />
            <section className="main d-flex align-center gap-larger">
                {
                    filteredSearchResults ? filteredSearchResults.map((hotel) =>
                     (<HotelCard key={hotel._id} hotel={hotel}/>)) : (<h3>Nothing found!</h3>)
                }
            </section>
        </Fragment>
    )
}