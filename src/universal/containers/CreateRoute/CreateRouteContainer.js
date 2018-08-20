// Libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';

@connect(mapStateToProps, mapDispatchToProps)
class AboutContainer extends Component {
	render () {
		return (
			<div className="page-container">
				<h2>Create Route</h2>
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

export default AboutContainer;
