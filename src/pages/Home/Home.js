import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { Navbar, HotelCard } from "../../components";
import "./Home.css";

export const Home = () => {

    const [hasMore, setHasMore] = useState(true);
    const [hotelsToShow, setHotelsToShow] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(16);

    const [hotels, setHotels] = useState([]);
    
    useEffect(()=>{
        (async () => {
            try{
                const {data} = await axios.get("https://dull-blue-reindeer-vest.cyclic.app/api/hotels");
                setHotels(data? data.slice(0,16) : []);    //To display only first 16 entries.
            }
            catch(err){
                console.log(err);
            }
        })();
    },[]);

    //const fetchMoreData

    return(
        <Fragment>
            <Navbar />
            <main className="main d-flex align-center wrap gap-larger">
                {
                    hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel}/>)
                }
            </main>

        </Fragment>
        
    )
}