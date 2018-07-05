import React from 'react';

import Sidebar from './sidebar';
import GoogleMap from './GoogleMap';

import './assets/styles/main.scss';

export default class App extends React.Component {
	// static propTypes = {
	// 	routeItems: React.PropTypes.array,
	// };

	constructor(props) {
		super(props);

		this.state = {
			routeItems: []
		}
	}

	getRouteItems = (routeItems) => {
		this.setState({routeItems: routeItems});
	}

	render() {
		return (
			<React.Fragment>
				<header>
					<div className="logo">Logotype</div>
					<nav>
						<a href="#">Routes</a>
						<a href="#">About App</a>
					</nav>
				</header>
				<GoogleMap routeItems={this.state.routeItems} />
				<Sidebar getRouteItems={this.getRouteItems} />
			</React.Fragment>
		);
	}
}
