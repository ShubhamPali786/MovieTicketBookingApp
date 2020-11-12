import { BookingModel, BookingResponseModel } from "../../models/api-models";
import { MoviesActionsTypes } from "./LatestMovies-Actions"

export const MovieBookingActionsTypes={
    GET_SHOW_TIMINGS:"[MovieBooking] Get Show Timings",
    GET_SHOW_TIMINGS_SUCCESS:"[MovieBooking] Get Show Timings Success",
    UPDATE_SELECTED_SHOW_TIME:"[MovieBooking] Update Selected Show Time",
    BOOK_SELECTED_MOVIE:"[MovieBooking] Book selected movie",
    MOVIE_BOOKED_SUCCESS:"[MovieBooking] Movie Booked Successfully"
}

const getshowtimings=(movieId:string)=>{
    return{
        type:MovieBookingActionsTypes.GET_SHOW_TIMINGS,
        movieId
    };
}

const getshowtimingsSuccess=(showTimings:BookingResponseModel)=>{
    return{
        type:MovieBookingActionsTypes.GET_SHOW_TIMINGS_SUCCESS,
        showTimings
    }
}
const updateslectedshowtime=(time:string)=>{
    return{
        type:MovieBookingActionsTypes.UPDATE_SELECTED_SHOW_TIME,time
    }
}

const bookselectedMovie=(bookingdata:BookingModel)=>{
    return{
        type:MovieBookingActionsTypes.BOOK_SELECTED_MOVIE,bookingdata
    }
}

const moviebookedSuccess=(id:number)=>{
    return{
        type:MovieBookingActionsTypes.MOVIE_BOOKED_SUCCESS,
        id
    }
}

export const MovieBookingActions={getshowtimings,getshowtimingsSuccess,updateslectedshowtime,bookselectedMovie,moviebookedSuccess};