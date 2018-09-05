// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
// Components
import SavedRoutesList from 'universal/components/SavedRoutesList';

@connect(mapStateToProps, mapDispatchToProps)
class SavedRoutesContainer extends Component {
	componentDidMount() {

	}

	render () {
		return (
			<div className="page-container">
				<h2>Saved Routes</h2>

				<SavedRoutesList />
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {};
}


function mapDispatchToProps(dispatch, props) {
	return {};
}

export default SavedRoutesContainer;
