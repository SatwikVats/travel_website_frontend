import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { Navbar, HotelCard, Categories, SearchStayWithDate, Filter } from "../../components";
import "./Home.css";
import { useCategory, useDate, useFilter } from "../../context";
import { GetHotelsByPrice, GetHotelsByRoomsAndBeds, GetHotelsByPropertyType} from "../../utils";

export const Home = () => {

    const [hasMore, setHasMore] = useState(true);
    //const [hotelsToShow, setHotelsToShow] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(16);
    const [testData, setTestData] = useState([]);

    const [hotels, setHotels] = useState([]);
    const {hotelCategory} = useCategory();
    const {isSearchModalOpen} = useDate();
    const {isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType} = useFilter();
    
    useEffect(()=>{
        (async () => {
            try{
                const {data} = await axios.get(`https://dull-blue-reindeer-vest.cyclic.app/api/hotels?category=${hotelCategory}`);
                setTestData(data);
                setHotels(data? data.slice(0,16) : []);    //To display only first 16 entries.
            }
            catch(err){
                console.log(err);
            }
        })();
    },[hotelCategory]);

    const fetchMoreData = () => {
        if(hotels.length>=testData.length){
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            if(hotels && hotels.length>0){
                setHotels(hotels.concat(testData.slice(currentIndex, currentIndex+16)));
                setCurrentIndex(prev => prev+16);
            }
            else{
                setHotels([]);
            }
        }, 1000);
    };

    const filteredHotelsByPrice = GetHotelsByPrice(hotels, priceRange);
    const filteredHotelsByRoomsAndBeds = GetHotelsByRoomsAndBeds(filteredHotelsByPrice, noOfBathrooms, noOfBedrooms, noOfBeds);
    const filteredHotelsByProperty = GetHotelsByPropertyType(filteredHotelsByRoomsAndBeds, propertyType);

    return(
        <div className="relative">
            <Navbar className="content-above"/>
            <Categories className="content-above"/>
                <Fragment>
            
                {
                    hotels && hotels.length>0? (
                        <InfiniteScroll 
                        className="infinite-scroll"
                        dataLength={hotels.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={hotels.length && <h3 className="alert-text">Loading...</h3>}
                        endMessage={<p className="alert-text">You have seen it all!</p>}
                        >
                            <main className="main d-flex align-center wrap gap-larger">
                                {
                                    filteredHotelsByProperty && filteredHotelsByProperty.map(hotel => 
                                    <HotelCard key={hotel._id} hotel={hotel}/>)
                                }
                            </main>
                            
                        </InfiniteScroll>
                    ) : (<></>)
                };
                </Fragment>
                {
                    isSearchModalOpen && <SearchStayWithDate />
                }
                {
                    isFilterModalOpen && <Filter/>
                }
        </div>        
    )
}