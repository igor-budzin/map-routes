// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

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

@connect(mapStateToProps, mapDispatchToProps)
class SavedRoutesContainer extends Component {
	componentDidMount() {

	}

	render () {
		return (
			<div className="page-container">
				<h2>Saved Routes</h2>

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
