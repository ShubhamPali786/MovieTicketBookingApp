import { put, takeEvery } from "redux-saga/effects";
import { AxiosInstance } from "../../AxiosBase";
import { MoviesDetailActions, MoviesDetailActionTypes } from "../actions/MoviesDetail-Action";


function* getmovieDetail(action:any){
    const url = '/moviesdetails/'+action.id;
	try {
		const response = yield AxiosInstance.get(url);
        yield put(MoviesDetailActions.getmoviedetailSuccess(response.data)); // dispatching an action
      
	} catch (e) {
      console.log(e);
	}
}

export function* moviedetailroot(){
    yield takeEvery(MoviesDetailActionTypes.GET_MOVIE_DETAIL,getmovieDetail)
}