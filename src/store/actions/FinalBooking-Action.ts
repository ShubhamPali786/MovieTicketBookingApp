import { BookingModel } from "../../models/api-models"

export const finalBookingActionTypes ={
    FETCH_BOOKING_DETAILS:"[finalBooking] fetch booking details by id",
    FETCH_BOOKING_DETAILS_SUCCESS:"[finalBooking] fetch booking details by id success"
}

const getbookingdetails = (id:string)=>{
    return{
        type:finalBookingActionTypes.FETCH_BOOKING_DETAILS,
        id
    }
}

const getbookingdetailsSuccess = (bookingData:BookingModel)=>{
    return{
        type: finalBookingActionTypes.FETCH_BOOKING_DETAILS_SUCCESS,
        bookingData
    }
}

export const finalBookingActions={getbookingdetails,getbookingdetailsSuccess}