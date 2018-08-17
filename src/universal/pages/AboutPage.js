// Libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';


@connect(mapStateToProps, mapDispatchToProps)
class AboutPage extends Component {
	render () {
		return (
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur velit optio officia doloremque dolores sequi doloribus eligendi dignissimos, nemo labore porro vitae, ullam a excepturi consectetur sapiente dicta necessitatibus debitis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illo nam placeat! Ut fuga at quia eveniet sunt repellendus, illum, minima nostrum impedit, officiis harum distinctio alias quod quos cupiditate.</p>
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

export default AboutPage;
