export const GetHotelsByCancellation = (hotels, isCancellable) => {
    const filteredHotels = hotels.filter(hotel=>hotel.isCancellable===isCancellable);
    return filteredHotels;
}