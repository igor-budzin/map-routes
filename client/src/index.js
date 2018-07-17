import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import App from './App';
import SavedRoutes from './SavedRoutes';
import About from './About';

ReactDOM.render(
	<Router>
		<React.Fragment>
			<header>
				<div className="logo">Logotype</div>
				<nav>
					<Link to="/">Create Route</Link>
					<Link to="/saved">Saved Routes</Link>
					<Link to="/about">About</Link>
				</nav>
			</header>
			
			<Route exact path="/" component={App} />
			<Route path="/saved" component={SavedRoutes} />
			<Route path="/about" component={About} />
		</React.Fragment>
	</Router>,
	document.getElementById('root')
);