import { put, takeEvery } from 'redux-saga/effects';
import { AxiosInstance } from '../../AxiosBase';
import { MoviesActions, MoviesActionsTypes } from '../actions/LatestMovies-Actions';

function* fetchlatestMovies(action:any){
    const url = '/latestmovies';
	try {
		const response = yield AxiosInstance.get(url);
        yield put(MoviesActions.fetchlatestMoviesSuccess(response.data)); // dispatching an action
      
	} catch (e) {
      console.log(e);
	}
}
function* fetchUpcomingMoviesData(action:any){
    const url = '/upcomingmovies';
	try {
		const response = yield AxiosInstance.get(url);
        yield put(MoviesActions.fetchupcomingMoviesSuccess(response.data)); // dispatching an action
      
	} catch (e) {
      console.log(e);
	}
}
function* fetcheventsData(action:any){
    const url = '/events';
	try {
		const response = yield AxiosInstance.get(url);
        yield put(MoviesActions.fetchnearbyEventsSuccess(response.data)); // dispatching an action
      
	} catch (e) {
      console.log(e);
	}
}


export function* fetchdata(){
    yield takeEvery(MoviesActionsTypes.GET_LATEST_MOVIES,fetchlatestMovies);
    yield takeEvery(MoviesActionsTypes.GET_UPCOMING_MOVIES,fetchUpcomingMoviesData);
    yield takeEvery(MoviesActionsTypes.GET_NEARBY_EVENTS,fetcheventsData)
}