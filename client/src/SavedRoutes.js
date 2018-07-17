import React from 'react';
import {Button} from 'antd';
import 'antd/lib/button/style';


export default class SavedRoutes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const routes = JSON.parse(localStorage.getItem('localRoutes'));
		console.log(routes);
		return (
			<div className="page-container">
				<h2>Saved routes</h2>

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
						{
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
								)
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}
