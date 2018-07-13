import React from 'react';

export default class SavedRoutes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const routes = JSON.parse(localStorage.getItem('localRoutes'));
		let abc = routes.forEach((item, index) => index);
		console.log(routes)
		return (
			<div className="page-container">
				<h2>Saved routes</h2>
				<div>
				</div>
			</div>
			
		);
	}
}
