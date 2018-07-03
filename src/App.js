import React from 'react';

import Sidebar from './sidebar';
import GoogleMap from './GoogleMapContainer';

import './assets/styles/main.scss';

export default class App extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
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
				<GoogleMap />
				<Sidebar />
			</React.Fragment>
		);
	}
}
