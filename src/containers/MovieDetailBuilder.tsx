import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import MovieDetail from '../components/MovieDetail';
import { MoviesDetailModel } from '../models/api-models';
import { MoviesDetailActions } from '../store/actions/MoviesDetail-Action';
import { StoreModel } from '../store/reducers';

interface MovieDetailProps extends Route {
	movieDetail: MoviesDetailModel;
    getMovieDetails: (id: string) => void;
    match: {
		params: {
			id: string;
		};
	};
	history:any[]
}

class MovieDetailBuilder extends React.Component<MovieDetailProps, {}> {

    componentDidMount(){
        this.props.getMovieDetails(this.props.match.params.id)
	}
	
	navigateToBookingPage(){
		this.props.history.push(`/moviebooking/${this.props.movieDetail.id}`)
	}

	render() {
      return  this.props.movieDetail ? <MovieDetail movieDetail={this.props.movieDetail}
	  bookTicketClick={()=>this.navigateToBookingPage()}/>
		: null;
	}
}

const mapStateToProps = (storeModel: StoreModel) => {
	return {
		movieDetail: storeModel.movieDetailModel.movieDetail,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		getMovieDetails: (id: string) => dispatch(MoviesDetailActions.getmoviedetail(id)),
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetailBuilder);