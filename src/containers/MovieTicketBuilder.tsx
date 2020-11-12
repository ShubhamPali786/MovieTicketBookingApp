import React from 'react';
import Carosel from '../Layout/Carosel';
import MoviesBuilder from './MoviesBuilder';

class MovieTicketBuilder extends React.Component<any, {}> {
	render() {
		return (
			<>
				<Carosel />
				<MoviesBuilder history={this.props.history} />
			</>
		);
	}
}

export default MovieTicketBuilder;
