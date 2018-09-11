// Libraries
import React, { Component, Fragment } from  'react';
import { Route, Redirect, Switch } from 'react-router';

import styles from 'universal/assets/styles/styles.scss';

// Routes
// For Development only
import * as RouteMap from '../routes/static.js';

// This is used in production for code splitting via `wepback.config.server.js`
// import * as RouteMap from 'universal/routes/async.js';

class Routes extends Component {
	render () {
		const { location } = this.props;

		return (
			<Fragment>
				<Switch>
					<Route exact location={location} path='/saved' component={RouteMap.SavedRoutesPage} />
					<Route exact location={location} path='/about' component={RouteMap.AboutPage} />
					<Route exact location={location} path='/create' component={RouteMap.CreateRoutePage} />
					<Route exact location={location} path='/contact' component={RouteMap.ContactPage} />
					<Route exact location={location} path='/auth' component={RouteMap.AuthPage} />
					<Route component={RouteMap.NotFoundPage} />
				</Switch>
			</Fragment>
		);
	}
}

export default Routes;
