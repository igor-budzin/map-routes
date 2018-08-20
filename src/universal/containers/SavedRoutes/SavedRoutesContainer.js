// Libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';

@connect(mapStateToProps, mapDispatchToProps)
class SavedRoutesContainer extends Component {
	render () {
		return (
			<div className="page-container">
				<h2>Saved Routes</h2>
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
