import React from 'react';
import axios from 'axios'

import Sidebar from './sidebar';
import GoogleMap from './GoogleMap';
import SaveRouteModal from './SaveRouteModal';

import './assets/styles/main.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			routeItems: [],
			distance: 0,
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
		this.setState({distance: distance, reloadMap: true});
	}

	saveRouteToStorage = (routeName) => {		
		axios.post('/save-route', {
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
		console.log(document.cookie);
		return (
			<React.Fragment>
				<GoogleMap
					onChangeDistance={this.onChangeDistance}
					routeItems={this.state.routeItems}
					routeVisibleType={this.state.routeVisibleType}
					reloadMap={this.state.reloadMap}
				/>
				<Sidebar
					distance={this.state.distance}
					getRouteItems={this.getRouteItems}
					onChangeType={this.onChangeType}
					showSaveRouteModal={this.showSaveRouteModal}
				/>
				<SaveRouteModal
					saveRouteToStorage={this.saveRouteToStorage}
					visibleSaveRouteModal={this.state.visibleSaveRouteModal}
					hideSaveRouteModal={this.hideSaveRouteModal}
				/>
			</React.Fragment>
		);
	}
}
