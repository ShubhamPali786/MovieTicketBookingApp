import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MoviesModel } from '../models/api-models';
import { MoviesActions } from '../store/actions/LatestMovies-Actions';
import { StoreModel } from '../store/reducers';
import GridListComponent from '../components/shared/GridListComponent';
import { RouterProps } from 'react-router';


interface MoviesBuilderProps {
	latestmoviesList: MoviesModel[];
	getLatestMovies: () => void;
	upcomingmoviesList: MoviesModel[];
	getupcomingMovies: () => void;
	nearbyeventList:MoviesModel[];
	getnearbyevents:() =>void;
	history:any[]

}

class MoviesBuilder extends React.Component<MoviesBuilderProps, {}> {

	componentDidMount() {
		this.props.getLatestMovies();
		this.props.getupcomingMovies();
		this.props.getnearbyevents();
	}

	navigateToMovieDetails(id:string){
		
		this.props.history.push(`/movie/${id}`)
	}

	render() {
		return (
			<>
			<div style={{ marginTop: '1em' }}>
				<h2 style={{ margin: 0, marginLeft: '.6em', marginBottom: '0.3em' }}>Latest Movies</h2>
				<GridListComponent movieslist={this.props.latestmoviesList} onClickHandler={(id:string)=>this.navigateToMovieDetails(id)} />
			</div>
			<div style={{ marginTop: '1em' }}>
				<h2 style={{ margin: 0, marginLeft: '.6em', marginBottom: '0.3em' }}>Upcoming Movies</h2>
				<GridListComponent movieslist={this.props.upcomingmoviesList} onClickHandler={(id:string)=>this.navigateToMovieDetails(id)} />
			</div>
			<div style={{ marginTop: '1em' }}>
				<h2 style={{ margin: 0, marginLeft: '.6em', marginBottom: '0.3em' }}>Nearby Events</h2>
				<GridListComponent movieslist={this.props.nearbyeventList}  onClickHandler={(id:string)=>this.navigateToMovieDetails(id)}/>
			</div>
			</>
		);
	}
}

const mapStateToProps = (store: StoreModel) => {
	return {
		latestmoviesList: store.moviesModel.latestmoviesList,
		upcomingmoviesList:store.moviesModel.upcomingmoviesList,
		nearbyeventList:store.moviesModel.eventlist
	};
};
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		getLatestMovies: () => dispatch(MoviesActions.fetchlatestMovies()),
		getupcomingMovies: ()=>dispatch(MoviesActions.fetchupcomingMovies()),
		getnearbyevents:()=>dispatch(MoviesActions.fetchnearbyEvents())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesBuilder);
