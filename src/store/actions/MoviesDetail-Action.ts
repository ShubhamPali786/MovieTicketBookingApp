import { MoviesDetailModel } from "../../models/api-models"

export const MoviesDetailActionTypes={
    GET_MOVIE_DETAIL:"[MovieDetail] Get movie detail by id",
    GET_MOVIE_DETAIL_SUCCESS:"[MovieDetail] Get movie detail by id Success"
}

const getmoviedetail =(id:string)=>{
    return{
        type:MoviesDetailActionTypes.GET_MOVIE_DETAIL,
        id
    }
}
const getmoviedetailSuccess =(movieDetail:MoviesDetailModel)=>{
    return{
        type:MoviesDetailActionTypes.GET_MOVIE_DETAIL_SUCCESS,
        movieDetail
    }
}

export const MoviesDetailActions ={getmoviedetail,getmoviedetailSuccess}