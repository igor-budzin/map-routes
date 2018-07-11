import React from 'react';

const mapStyle = require("./mapStyle.json");
const iconMarker = require('./assets/img/marker.svg');

export default class GoogleMap extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.initMap();
	}

	initMap() {
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: new google.maps.LatLng(49.8375807, 24.0022641),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: mapStyle,
			icon: iconMarker
		});
	}

	clearMap() {

	}

	buildRoute() {
		let waypts = [];
		this.props.routeItems.forEach((item, index) => {
			if(index !== 0 && index !== this.props.routeItems.length - 1) {
				waypts.push({
					location: new google.maps.LatLng(item.lat, item.lng)
				});
			}
		});

		this.directionsService.route({
			origin: new google.maps.LatLng(this.props.routeItems[0].lat, this.props.routeItems[0].lng),
			destination: new google.maps.LatLng(this.props.routeItems[this.props.routeItems.length - 1].lat, this.props.routeItems[this.props.routeItems.length - 1].lng),
			travelMode: google.maps.DirectionsTravelMode.DRIVING,
			waypoints: waypts
		}, (response, status) => {
			if(status === 'OK') {
				this.directionsDisplay.setDirections(response);
			}
		});
	}

	setMarkers() {
		this.props.routeItems.forEach((item) => {
			const marker = new google.maps.Marker({
				map: this.map,
				position: new google.maps.LatLng(item.lat, item.lng),
				icon: iconMarker,
				animation: google.maps.Animation.DROP
			});
		});	
	}

	componentDidUpdate() {
		if(this.directionsDisplay != null) {
			this.directionsDisplay.setMap(null);
			this.directionsDisplay = null;
		}

		this.directionsService = new google.maps.DirectionsService;
		this.directionsDisplay = new google.maps.DirectionsRenderer({map: this.map});

		// this.clearMap();

		if(this.props.routeItems.length === 1) {
			this.setMarkers();
		}
		else if(this.props.routeItems.length >= 1) {
			if(this.props.routeVisibleType === 'route') {
				this.buildRoute();
			}
			else if(this.props.routeVisibleType === 'marker') {
				this.setMarkers();
			}
		}
	}

	render() {
		return(
			<React.Fragment>
				<div id="map"></div>
				<div id="map2"></div>
			</React.Fragment>
		);
	}
}
