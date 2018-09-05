import React, { Component } from 'react';

const List = () => {
	const routes = null;
	console.log(routes);
	if(routes !== null) {
		return (
			routes.map((item, index) => {
				let point = item.routeItems.map((route) => route.main_text);
				return (
					<tr className="route" key={item.routeName + index}>
						<td>{item.routeName}</td>
						<td>{point.join(', ')}</td>
						<td>{`${item.distance} km`}</td>
						<td>
							<span className="btn-wrap">
								<Button type="primary">Edit</Button>
								<Button type="danger">Delete</Button>
							</span>
						</td>
					</tr>
				);
			})
		);
	}
	else return null;
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
					<List />
				</tbody>
			</table>
		);
	}
}

export default SavedRoutesList;