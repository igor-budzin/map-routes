// Libraries
import React, { Component, Fragment } from 'react';

import SavedRoutesContainer from 'universal/containers/SavedRoutes/SavedRoutesContainer';
import Header from 'universal/components/Header/Header';

class SavedRoutesPage extends Component {
	render () {
		return (
			<Fragment>
				<Header />
				<SavedRoutesContainer />
			</Fragment>
		);
	}
}

export default SavedRoutesPage;
