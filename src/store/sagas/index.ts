import { all } from 'redux-saga/effects';
import { finalBookingSagaRoot } from './FinalBooking-saga';
import { fetchdata } from './LatestMovies-saga';
import { movieBookingRoot } from './MovieBooking-saga';
import { moviedetailroot } from './MovieDetail-saga';

export default function* rootSaga() {
	yield all([fetchdata(),moviedetailroot(),movieBookingRoot(),finalBookingSagaRoot()]);
}
