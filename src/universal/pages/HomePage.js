// Libraries
import React, { Component, Fragment } from 'react';

import AboutContainer from 'universal/containers/About/AboutContainer';
import Header from 'universal/components/Header/Header';

class HomePage extends Component {
	render () {
		return (
			<Fragment>
				<Header />
				<h1>Home page</h1>
			</Fragment>
		);
	}
}

export default HomePage;
