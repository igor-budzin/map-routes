import React from 'react';

const mapStyle = require("./mapStyle.json");
const iconMarker = require('./assets/img/marker.svg');

export default class GoogleMap extends React.Component {
	constructor(props) {
		super(props);
		const _this  = this;
	}

	calculateAndDisplayRoute(directionsDisplay, directionsService, stepDisplay, map) {
	  // First, remove any existing markers from the map.
	  // for (var i = 0; i < markerArray.length; i++) {
	  //   markerArray[i].setMap(null);
	  // }

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

	componentDidUpdate() {
		// const placesService = new google.maps.places.PlacesService(this.map);

		if(this.props.routeItems.length === 1) {
			const marker = new google.maps.Marker({
				map: this.map,
				position: new google.maps.LatLng(this.props.routeItems[0].lat, this.props.routeItems[0].lng),
				icon: iconMarker,
				animation: google.maps.Animation.DROP
			});
			this.map.panTo(new google.maps.LatLng(this.props.routeItems[0].lat, this.props.routeItems[0].lng));


		}
		else if(this.props.routeItems.length >= 1) {
			const directionsService = new google.maps.DirectionsService;
			const directionsDisplay = new google.maps.DirectionsRenderer({map: this.map});

			let waypts = [];
			this.props.routeItems.forEach((item, index) => {
				if(index !== 0 && index !== this.props.routeItems.length - 1) {
					waypts.push({
						location: new google.maps.LatLng(item.lat, item.lng),
						stopover: true
					});
					console.log()
				}
			});


			directionsService.route({
				origin: new google.maps.LatLng(this.props.routeItems[0].lat, this.props.routeItems[0].lng),
				destination: new google.maps.LatLng(this.props.routeItems[this.props.routeItems.length - 1].lat, this.props.routeItems[this.props.routeItems.length - 1].lng),
				travelMode: google.maps.DirectionsTravelMode.DRIVING,
				waypoints: waypts
			}, (response, status) => {
				console.log(response);
				if(status === 'OK') {
					 directionsDisplay.setDirections(response);
					// console.log(response)
					// For each step, place a marker, and add the text to the marker's infowindow.
					 // Also attach the marker to an array so we can keep track of it and remove it
					 // when calculating new routes.
					 // var myRoute = directionResult.routes[0].legs[0];
					 // for (var i = 0; i < myRoute.steps.length; i++) {
					 //   var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
					 //   marker.setMap(map);
					 //   marker.setPosition(myRoute.steps[i].start_location);
					// }
				}
			});

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
