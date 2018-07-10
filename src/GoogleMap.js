import React from 'react';

const mapStyle = require("./mapStyle.json");
const iconMarker = require('./assets/img/marker.svg');

export default class GoogleMap extends React.Component {
	constructor(props) {
		super(props);

		this.directionsService = new google.maps.DirectionsService;
		this.directionsDisplay = new google.maps.DirectionsRenderer({map: this.map});
	}

	componentDidMount() {
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: new google.maps.LatLng(49.8375807, 24.0022641),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: mapStyle,
			icon: iconMarker
		});
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
				console.log("44444")
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
		this.directionsDisplay.setDirections({routes: []});

		if(this.props.routeItems.length === 1) {
			this.setMarkers();
			console.log('111')
		}
		else if(this.props.routeItems.length >= 1) {
			if(this.props.routeVisibleType === 'route') {
				this.buildRoute();
				console.log('222')
			}
			else if(this.props.routeVisibleType === 'marker') {
				this.setMarkers();
				console.log('3333')
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
