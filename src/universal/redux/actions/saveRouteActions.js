import axios from 'axios';

import {
	REQUEST_SAVE_ROUTE,
	REQUEST_SAVE_ROUTE_SUCCESS,
	REQUEST_SAVE_ROUTE_ERROR
} from '../consts';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080/api/',
	headers: {'Access-Control-Allow-Origin': '*'}
});


export function requestSaveRoute() {
	return {
		type: REQUEST_SAVE_ROUTE,
		loading: true
	}
}

export function requestSaveRouteSuccess() {
	return {
		type: REQUEST_SAVE_ROUTE_SUCCESS,
		loading: false
	}
}

export function requestSaveRouteError() {
	return {
		type: REQUEST_SAVE_ROUTE_ERROR,
		loading: false
	}
}

export function saveRouteAction(data) {
	return (dispatch) => {
		dispatch(requestSaveRoute());
		axiosInstance.post('save-route', data)
		.then((response) => {
			if(response.data === 'OK') {
				dispatch(requestSaveRouteSuccess());
			}
			else {
				dispatch(requestSaveRouteError());
			}
			// this.setState({
			// 	visibleSaveRouteModal: false,
			// 	reloadMap: false,
			// 	distance: 0,
			// 	reloadMap: true,
			// 	routeItems: []
			// });
		})
		.catch((error) => {
			dispatch(requestSaveRouteError());
			console.log(error);
		});
	}
}