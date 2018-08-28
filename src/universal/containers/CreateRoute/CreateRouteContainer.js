// Libraries
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
// Components
import GoogleMap from 'universal/components/GoogleMap';
import Sidebar from 'universal/components/Sidebar';
import SaveRouteModal from 'universal/components/SaveRouteModal';
// Actions
import { changeDistanceAction } from 'universal/redux/actions/mapActions';


@connect(mapStateToProps, mapDispatchToProps)
class CreateRouteContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			routeItems: [],
			visibleSaveRouteModal: false,
			reloadMap: false,
			routeVisibleType: localStorage.getItem('routeVisibleType') !== null ? localStorage.getItem('routeVisibleType') : 'route'
		}
	}

	getRouteItems = (routeItems) => {
		this.setState({routeItems: routeItems, reloadMap: true});
	}

	onChangeType = (type) => {
		this.setState({routeVisibleType: type, reloadMap: true});
	}

	onChangeDistance = (distance) => {
		// this.setState({distance: distance, reloadMap: true});
		this.props.changeDistance(distance);
	}

	saveRouteToStorage = (routeName) => {
		axios.post('/api/save-route', {
			routeName: routeName,
			routeItems: JSON.stringify(this.state.routeItems),
			distance: this.state.distance,
			routeVisibleType: this.state.routeVisibleType
		})
		.then((response) => {
			this.setState({
				visibleSaveRouteModal: false,
				reloadMap: false,
				distance: 0,
				reloadMap: true,
				routeItems: []
			});
		})
		.catch((error) => {
			console.log(error);
		});
	}

	showSaveRouteModal = () => {
		this.setState({visibleSaveRouteModal: true, reloadMap: false});
	}

	hideSaveRouteModal = () => {
		this.setState({visibleSaveRouteModal: false, reloadMap: false});
	}

	render() {
		// console.log(document.cookie);
		return (
			<Fragment>
				<GoogleMap
					onChangeDistance={this.onChangeDistance}
					routeItems={this.state.routeItems}
					routeVisibleType={this.state.routeVisibleType}
					reloadMap={this.state.reloadMap}
				/>
				<Sidebar
					distance={this.props.distance}
					getRouteItems={this.getRouteItems}
					onChangeType={this.onChangeType}
					showSaveRouteModal={this.showSaveRouteModal}
				/>
				<SaveRouteModal
					saveRouteToStorage={this.saveRouteToStorage}
					visibleSaveRouteModal={this.state.visibleSaveRouteModal}
					hideSaveRouteModal={this.hideSaveRouteModal}
				/>
			</Fragment>
		);
	}
}


function mapStateToProps(state, props) {
	return {
		distance: state.mapReducer.distance
	};
}


function mapDispatchToProps(dispatch, props) {
	return bindActionCreators({
		changeDistance: changeDistanceAction
	}, dispatch);
}

export default CreateRouteContainer;
