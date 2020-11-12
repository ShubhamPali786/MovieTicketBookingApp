import { MoviesModel } from "../../models/api-models";

export const  MoviesActionsTypes ={
    GET_LATEST_MOVIES :"[LatestMovies] fetch latest movies data",
    GET_LATEST_MOVIES_SUCCESS:"[LatestMovies] fetch latest movies data Success",
    GET_UPCOMING_MOVIES :"[upcomingMovies] fetch upcoming movies data",
    GET_UPCOMING_MOVIES_SUCCESS:"[upcomingMovies] fetch upcoming movies data Success",
    GET_NEARBY_EVENTS:"[events] fetch event details",
    GET_NEARBY_EVENTS_SUCCESS:"[events] fetch event details Success",
}

const fetchlatestMovies = ()=>{
    return{
        type:MoviesActionsTypes.GET_LATEST_MOVIES
    };
}
const fetchlatestMoviesSuccess = (latestmoviesList:MoviesModel[])=>{
    return{
        type:MoviesActionsTypes.GET_LATEST_MOVIES_SUCCESS,
        latestmoviesList
    };
}
const fetchupcomingMovies = ()=>{
    return{
        type:MoviesActionsTypes.GET_UPCOMING_MOVIES
    };
}
const fetchupcomingMoviesSuccess = (upcomingmoviesList:MoviesModel[])=>{
    return{
        type:MoviesActionsTypes.GET_UPCOMING_MOVIES_SUCCESS,
        upcomingmoviesList
    };
}

const fetchnearbyEvents = ()=>{
    return{
        type:MoviesActionsTypes.GET_NEARBY_EVENTS
    };
}
const fetchnearbyEventsSuccess = (eventlist:MoviesModel[])=>{
    return{
        type:MoviesActionsTypes.GET_NEARBY_EVENTS_SUCCESS,
        eventlist
    };
}
export const MoviesActions = {fetchlatestMovies,fetchlatestMoviesSuccess,fetchupcomingMovies,fetchupcomingMoviesSuccess,fetchnearbyEvents,fetchnearbyEventsSuccess};