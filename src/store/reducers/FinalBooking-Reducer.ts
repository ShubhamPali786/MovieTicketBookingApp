import { Action } from "redux";
import { BookingModel } from "../../models/api-models";
import { finalBookingActionTypes } from "../actions/FinalBooking-Action";


interface FinalBookingActions extends Action{
    bookingData:BookingModel
}

const initState ={
    bookingdata:{}
}

function FinalBookingReducer(state=initState,action:FinalBookingActions){
    switch (action.type) {
        case finalBookingActionTypes.FETCH_BOOKING_DETAILS_SUCCESS:
            return{
                bookingdata:action.bookingData
            }
    
        default:
            return state
    }
}

export default FinalBookingReducer;