import { Action } from "redux";
import { MoviesDetailModel } from "../../models/api-models";
import { MoviesDetailActionTypes } from "../actions/MoviesDetail-Action";

 
interface MoviesDetailActions extends Action{
    movieDetail:MoviesDetailModel
}

const initState={
    movieDetail:undefined
}

function moviesdetailReducer(state=initState,actions:MoviesDetailActions){
    switch (actions.type) {
        case MoviesDetailActionTypes.GET_MOVIE_DETAIL_SUCCESS:
            return{
                movieDetail:actions.movieDetail
            }
    
        default:
            return state;
    }
}

export default moviesdetailReducer;