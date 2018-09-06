import React, { Component } from 'react';

function List(data) {
	// const routes = data;
	console.log('List', data.routes.length)
	// const routes = data.routes;
	// if(routes !== null && routes.length > 0) {
	// 	const html = routes.map((item, index) => {
	// 		let point = item.routeItems.map((route) => route.main_text);
	// 		return (
	// 			<tr className="route" key={item.routeName + index}>
	// 				<td>{item.routeName}</td>
	// 				<td>{point.join(', ')}</td>
	// 				<td>{`${item.distance} km`}</td>
	// 				<td>
	// 					<span className="btn-wrap">
	// 						<Button type="primary">Edit</Button>
	// 						<Button type="danger">Delete</Button>
	// 					</span>
	// 				</td>
	// 			</tr>
	// 		);
	// 	});
	// 	console.log('html', html)
	// 	return html;
	// }
	// else return null;
	return <h1></h1>
}

class SavedRoutesList extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<table className="saved-routes-list">
				<thead>
					<tr>
						<td>Route Name</td>
						<td>Route Points</td>
						<td>Distance</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					<List routes={this.props.routes} />
				</tbody>
			</table>
		);
	}
}

export default SavedRoutesList;