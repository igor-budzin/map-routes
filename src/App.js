import React from 'react';

import './assets/styles/main.css'

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
				<aside>
					<input type="text" className="field-from" placeholder="from" />
					<input type="text" className="field-to" placeholder="to" />
				</aside>
			</React.Fragment>
		);
	}
}
