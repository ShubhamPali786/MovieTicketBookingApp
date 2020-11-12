import React from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import Booking from '../components/Booking';
import { ShowTimingModel, BookingResponseModel, MoviesDetailModel, BookingModel, SeatModel, ShowDatesModel } from '../models/api-models';
import { MovieBookingActions } from '../store/actions/MovieBooking-Actions';
import { MoviesDetailActions } from '../store/actions/MoviesDetail-Action';
import { StoreModel } from '../store/reducers';

interface MovieBookingBuilderProps {
	showTimingModel: ShowTimingModel;
	movieDetailModel: MoviesDetailModel;
	bookingId:number;

	match: {
		params: {
			id: string;
		};
	};
	history:any[];
	getshowTimings: (id: string) => void;
	getmovieDetails: (id: string) => void;
	updateSelectedShowtime:(time:string)=>void;
	bookMovie:(bookingdata:BookingModel)=>void;
	
}

interface MovieBookingBuilderState{
	showdates:ShowDatesModel[],
	seats:SeatModel[]
}

class MovieBookingBuilder extends React.Component<MovieBookingBuilderProps, MovieBookingBuilderState> {

	state:MovieBookingBuilderState={
		showdates:[],
		seats:[]
	};

	componentDidMount() {
		this.setState({showdates:this.getshowdates(),seats:this.getSeats()})
		this.props.getshowTimings(this.props.match.params.id);
		this.props.getmovieDetails(this.props.match.params.id);
	}

	

	getWeekName = (index: number) => {
		let weeknames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return weeknames[index];
	};
	getshowdates = () => {
		let currentDate = new Date();
		let showDates: any[] = [];
		let daycount = 1;
		let day = currentDate.getDay();
		let date = currentDate.getDate();
		while (daycount <= 7) {
			showDates.push({
				day: this.getWeekName(day),
				date: date,
				selected: currentDate.getDate()===date ?true:false
			});
			day += 1;
			date += 1;
			if (day > 6) day = 0;
			if (date > 31) date = 1;
			daycount++;
		}
		return showDates;
	};
	getSeats = ()=>{
		let seats:any[] =[];
		let count=1;
		while(count<=7){
			seats.push({
				seat:count,
				selected:false
			});
			count++;
		};

		seats[0].selected = true;
		return seats;
	}
	updateSelectedSeat = (seatno:number)=>{
		let seats:any[] = [...this.state.seats];

		seats.map(item=>{
			item.selected = item.seat === seatno?true:false
			return item;
		});

		this.setState({seats:seats});
	}

	updateSelectedShowDate=(date:string)=>{
		let showdates:any[]=[...this.state.showdates];

		showdates.map(item=>{
			item.selected = item.date === date ? true:false;
			return item;
		});
		this.setState({showdates:showdates});
	}

	setBookingDetails=()=>{
		let bookingModel:BookingModel={
			id:'',movieid:'',noofseats:0,showdate:'',showtime:''
		};
		bookingModel.movieid = this.props.movieDetailModel.id;
		bookingModel.noofseats = this.state.seats.find(item=>item.selected)!.seat;
		bookingModel.showdate = this.getbookingDate();
		bookingModel.showtime = this.props.showTimingModel.showtimings.find(item=>item.selected)!.showtime;

		this.props.bookMovie(bookingModel);

	}
	getbookingDate=()=>{
		let selectedDate:ShowDatesModel = this.state.showdates.find(item=>item.selected)!;
		let dateObj = new Date();
		let MonthArr = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sept","Oct","Nov","Dec"]
		let currentMonth = MonthArr[dateObj.getMonth()];

		let bookingDateString = `${selectedDate.day}, ${selectedDate.date} ${currentMonth} ${dateObj.getFullYear()}`;

		return bookingDateString;
	}
	

	render() {
		if(this.props.bookingId>0)
		{
			this.props.history.push(`/booking/${this.props.bookingId}`);
			return null;
		}
			if (this.props.showTimingModel._id && this.props.movieDetailModel)
			return (
				<Booking movieDetailModel={this.props.movieDetailModel} 
				showTimingModel={this.props.showTimingModel} showdates={this.state.showdates}
				seats = {this.state.seats}
				ondateClick={(date:string)=>this.updateSelectedShowDate(date)}
				ontimeClick={(time:string)=>this.props.updateSelectedShowtime(time)}
				onseatnoClick ={(seatno:number)=>this.updateSelectedSeat(seatno)} 
				onbookbtnClick={()=>this.setBookingDetails()} />
			);
		return null;
	}
}

const mapStateToProps = (store: StoreModel) => {
	return {
		showTimingModel: store.movieBookingModel.showTimings,
		movieDetailModel: store.movieDetailModel.movieDetail,
		bookingId:store.movieBookingModel.bookingId
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		getshowTimings: (id: string) => dispatch(MovieBookingActions.getshowtimings(id)),
		getmovieDetails: (id: string) => dispatch(MoviesDetailActions.getmoviedetail(id)),
		updateSelectedShowtime:(time:string)=>dispatch(MovieBookingActions.updateslectedshowtime(time)),
		bookMovie:(bookingData:BookingModel)=>dispatch(MovieBookingActions.bookselectedMovie(bookingData))

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieBookingBuilder);
