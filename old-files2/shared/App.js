import React from 'react';
import {Route, Link, Switch} from "react-router-dom";

import CreateRouteContainer from './CreateRouteContainer';
import SavedRoutes from './SavedRoutes';
import About from './About';
import Auth from './Auth';

import './assets/styles/main.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<header>
					<div className="logo">Logotype</div>
					<nav>
						<Link to="/">Create Route</Link>
						<Link to="/saved">Saved Routes</Link>
						<Link to="/about">About</Link>
						<Link to="/auth">Auth</Link>
					</nav>
				</header>
				<Switch>
					<Route exact path="/" component={CreateRouteContainer} />
					<Route path="/auth" component={Auth} />
					<Route path="/saved" component={SavedRoutes} />
					<Route path="/about" component={About} />
				</Switch>
			</React.Fragment>
		)
	}
}