import { Action } from "redux";
import { MoviesModel } from "../../models/api-models";
import { MoviesActionsTypes } from "../actions/LatestMovies-Actions";

interface MoviesActions extends Action{
    latestmoviesList:MoviesModel[],
    upcomingmoviesList:MoviesModel[],
    eventlist:MoviesModel[]
}

const initState={
    latestmoviesList:[],
    upcomingmoviesList:[],
    eventlist:[]
};

function moviesReducer(state=initState,action:MoviesActions){

    switch (action.type) {
        case MoviesActionsTypes.GET_LATEST_MOVIES_SUCCESS:
            return{
                latestmoviesList:action.latestmoviesList
            }
      case MoviesActionsTypes.GET_UPCOMING_MOVIES_SUCCESS:
            return{
                ...state,
                upcomingmoviesList:action.upcomingmoviesList
            }
      case MoviesActionsTypes.GET_NEARBY_EVENTS_SUCCESS:
          return{
              ...state,
              eventlist:action.eventlist
          }
        default:
            return state;
    }

}

export default moviesReducer;