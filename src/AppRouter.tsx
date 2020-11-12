import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FinalBookingBuilder from './containers/FinalBookingBuilder';
import MovieBookingBuilder from './containers/MovieBookingBuilder';
import MovieDetailBuilder from './containers/MovieDetailBuilder';
import MovieTicketBuilder from './containers/MovieTicketBuilder';

const AppRouter: React.FC<{}> = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={MovieTicketBuilder} exact={true} />
				<Route path="/movie/:id" component={MovieDetailBuilder} exact={true} />
				<Route path="/moviebooking/:id" component={MovieBookingBuilder} exact={true} />
				<Route path="/booking/:id" component={FinalBookingBuilder}/>
			</Switch>
		</BrowserRouter>
	);
};
export default AppRouter;
