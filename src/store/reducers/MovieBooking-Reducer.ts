import { Action } from 'redux';
import { ShowTimingModel, BookingResponseModel } from '../../models/api-models';
import { MovieBookingActionsTypes } from '../actions/MovieBooking-Actions';

interface MovieBookingAction extends Action {
	showTimings: BookingResponseModel;
	time: string;
	id:number;
}

const initState = {
	showTimings: {
		_id: '',
		date: '',
		showtimings: [],
    },
    bookingId:0
};

function MovieBookingReducer(state = initState, action: MovieBookingAction) {
	switch (action.type) {
		case MovieBookingActionsTypes.GET_SHOW_TIMINGS_SUCCESS:
			let bookingModel = getbookingModel(action.showTimings);
			return {
                ...state,
				showTimings: bookingModel,
			};
		case MovieBookingActionsTypes.UPDATE_SELECTED_SHOW_TIME:
			let showtimings: ShowTimingModel = { ...state.showTimings };
			showtimings.showtimings.map((item) => {
				item.selected = item.showtime === action.time ? true : false;
			});
			return {...state,
				showTimings: showtimings,
            };
        case MovieBookingActionsTypes.MOVIE_BOOKED_SUCCESS:
            return{
                ...state,
                bookingId:action.id
            }
		default:
			return state;
	}
}

const getbookingModel = (resmodel: BookingResponseModel) => {
	let showTimings = resmodel.showtiming.split(',');

	let bookingModel: ShowTimingModel = {
		_id: resmodel.id,
		date: resmodel.date,
		showtimings: [],
	};
	showTimings.forEach((item) => {
		bookingModel.showtimings.push({
			showtime: item,
			selected: false,
		});
	});

	bookingModel.showtimings[0].selected = true;

	return bookingModel;
};

export default MovieBookingReducer;
