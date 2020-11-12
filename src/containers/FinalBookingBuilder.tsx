import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FinalBooking from '../components/FinalBooking';
import { BookingModel, MoviesDetailModel } from '../models/api-models';
import { finalBookingActions } from '../store/actions/FinalBooking-Action';
import { MoviesDetailActions } from '../store/actions/MoviesDetail-Action';
import { StoreModel } from '../store/reducers';

interface FinalBookingBuilderProps {
	match: {
		params: {
			id: string;
		};
	};
	bookingModel: BookingModel;
	movieDetailModel: MoviesDetailModel;

	getbookingDetail: (id: string) => void;
	getmoviedetail: (id: string) => void;
}

interface FinalBookingState{
	movieDetailModel: MoviesDetailModel;
}

class FinalBookingBuilder extends React.Component<FinalBookingBuilderProps, FinalBookingState> {

	state:FinalBookingState ={
		movieDetailModel:{
			id:'',duration:'',imageUrl:"",
			language:"",name:"",rate:0,releasedate:"",synopsis:"",
			type:""
		}	
	}
    componentDidMount(){
        this.props.getbookingDetail(this.props.match.params.id);

    }

    render() {
		if(this.props.bookingModel?.id && this.props.movieDetailModel?.id)
		 return <FinalBooking bookingData={this.props.bookingModel} MovieDetail={this.props.movieDetailModel}/>
		return null;
	}
}

const mapStateToProps = (store: StoreModel) => {
	return {
		bookingModel: store.FinalBookingModel.bookingdata,
		movieDetailModel: store.movieDetailModel.movieDetail,
	};
};
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		getbookingDetail: (id: string) => dispatch(finalBookingActions.getbookingdetails(id)),
		getmoviedetail: (id: string) => dispatch(MoviesDetailActions.getmoviedetail(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalBookingBuilder);
