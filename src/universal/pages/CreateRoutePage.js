// Libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';


@connect(mapStateToProps, mapDispatchToProps)
class CreateRoutePage extends Component {
	render () {
		return (<h1>Create Route Page</h1>);
	}
}


function mapStateToProps(state, props) {
	return {};
}


function mapDispatchToProps(dispatch, props) {
	return {};
}

export default CreateRoutePage;
