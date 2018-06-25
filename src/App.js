import React from 'react';

import Sidebar from './sidebar';

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
						<a href="#">item 1</a>
						<a href="#">item 2</a>
						<a href="#">item 3</a>
						<a href="#">item 4</a>
						<a href="#">item 5</a>
					</nav>
				</header>
				<Sidebar />
			</React.Fragment>
		);
	}
}
