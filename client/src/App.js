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
		this.setState({visibleSaveRouteModal: false, reloadMap: false});
		
		// const localRoutes = JSON.parse(localStorage.getItem('localRoutes')) || [];

		// const currentRouteObj = {
		// 	routeName: routeName,
		// 	routeItems: this.state.routeItems,
		// 	distance: this.state.distance,
		// 	routeVisibleType: this.state.routeVisibleType,
		// 	createDate: new Date().toUTCString()
		// };

		// localRoutes.push(currentRouteObj)
		// localStorage.setItem('localRoutes', JSON.stringify(localRoutes));

		// this.setState({
		// 	distance: 0,
		// 	reloadMap: true,
		// 	routeItems: []
		// });

		axios({
			method: 'get',
			url: '/save-route',
			data: {
				routeName: 'dsds'
			}
		})
		.then((response) => {
			console.log(response);
			console.log('Saved to storage: ' + routeName);
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
