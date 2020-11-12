import { put, takeEvery } from "redux-saga/effects";
import { AxiosInstance } from "../../AxiosBase";
import { finalBookingActions, finalBookingActionTypes } from "../actions/FinalBooking-Action";
import { MoviesDetailActions } from "../actions/MoviesDetail-Action";

function* getbookingdetail(action:any){
    const url = '/bookings/'+action.id;
	try {
		const response = yield AxiosInstance.get(url);
        yield put(finalBookingActions.getbookingdetailsSuccess(response.data)); // dispatching an action
        yield put(MoviesDetailActions.getmoviedetail(response.data.movieid));
	} catch (e) {
      console.log(e);
	}
}

export function* finalBookingSagaRoot(){
    yield takeEvery(finalBookingActionTypes.FETCH_BOOKING_DETAILS,getbookingdetail)
}