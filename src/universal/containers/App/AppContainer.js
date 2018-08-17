import React, { Component, Fragment } from 'react';

import App from 'universal/components/App/App';
import Header from 'universal/components/Header/Header';

class AppContainer extends Component {

	render () {
		return (
			<Fragment>
				<Header />
				<App {...this.props}/>
			</Fragment>
		);
	}
}

export default AppContainer;
