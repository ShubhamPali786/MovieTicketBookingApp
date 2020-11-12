import { combineReducers } from "redux";
import { ShowTimingModel, BookingResponseModel, MoviesDetailModel, MoviesModel, BookingModel } from "../../models/api-models";
import FinalBookingReducer from "./FinalBooking-Reducer";
import MovieBookingReducer from "./MovieBooking-Reducer";
import moviesdetailReducer from "./MovieDetail-Reducer";
import moviesReducer from "./Movies-Reducer";

export interface StoreModel{
    moviesModel:{
        latestmoviesList:MoviesModel[],
        upcomingmoviesList:MoviesModel[],
        eventlist:MoviesModel[]
    },
    movieDetailModel:{
        movieDetail:MoviesDetailModel
    },
    movieBookingModel:{
        showTimings:ShowTimingModel,
        bookingId:number
    },
    FinalBookingModel:{
        bookingdata:BookingModel
    }
}

const rootReducer = combineReducers({moviesModel:moviesReducer,
    movieDetailModel:moviesdetailReducer,movieBookingModel:MovieBookingReducer,
    FinalBookingModel:FinalBookingReducer});

export default rootReducer;