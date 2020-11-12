import { put, takeEvery } from "redux-saga/effects";
import { AxiosInstance } from "../../AxiosBase";
import { MovieBookingActions, MovieBookingActionsTypes } from "../actions/MovieBooking-Actions";

function* getshowTimings(action: any) {
    const url =`/showtimings/${action.movieId}`
	try {
        const response = yield AxiosInstance.get(url);
        yield put(MovieBookingActions.getshowtimingsSuccess(response.data)); // dispatching an action
      
	} catch (error) {console.log(error)}
}
function* bookMovie(action:any){

    const url =`/bookings`
	try {
        const response = yield AxiosInstance.post(url,action.bookingdata);
        yield put(MovieBookingActions.moviebookedSuccess(response.data.id)); // dispatching an action
      
	} catch (error) {console.log(error)}
}

export function* movieBookingRoot(){
    yield takeEvery(MovieBookingActionsTypes.GET_SHOW_TIMINGS,getshowTimings);
    yield takeEvery(MovieBookingActionsTypes.BOOK_SELECTED_MOVIE,bookMovie)
}