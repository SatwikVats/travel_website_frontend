export const HotelReducer = (state, {type, payload}) => {
    switch(type){
        case "SET_HOTEL_BOOKING":
            return{
                ...state,
                hotel: payload,
            }
        case "CLEAR_HOTEL_BOOKING":
            return{
                ...state,
                hotel: {},
            }
        default:
            return state;
    }
}