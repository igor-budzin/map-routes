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
			routeItems: [],
			routeVisibleType: localStorage.getItem('routeVisibleType') !== null ? localStorage.getItem('routeVisibleType') : 'route'
		}
	}

	getRouteItems = (routeItems) => {
		this.setState({routeItems: routeItems});
	}

	onChangeType = (type) => {
		this.setState({routeVisibleType: type});
	}

	render() {
		return (
			<React.Fragment>
				<header>
					<div className="logo">Logotype</div>
					<nav>
						<a href="#">Create Route</a>
						<a href="#">Saved Routes</a>
						<a href="#">About App</a>
					</nav>
				</header>
				<GoogleMap
					routeItems={this.state.routeItems}
					routeVisibleType={this.state.routeVisibleType}
				/>
				<Sidebar
					getRouteItems={this.getRouteItems}
					onChangeType={this.onChangeType}
				/>
			</React.Fragment>
		);
	}
}
