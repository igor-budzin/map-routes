import React from 'react';

const mapStyle = require("./mapStyle.json");
const iconMarker = require('./assets/img/marker.svg');

export default class GoogleMap extends React.Component {
	constructor(props) {
		super(props);
	}

	calculateAndDisplayRoute(directionsDisplay, directionsService, stepDisplay, map) {
	  // First, remove any existing markers from the map.
	  // for (var i = 0; i < markerArray.length; i++) {
	  //   markerArray[i].setMap(null);
	  // }

	  // Retrieve the start and end locations and create a DirectionsRequest using
	  // WALKING directions.

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
		const placesService = new google.maps.places.PlacesService(this.map);
		if(this.props.routeItems.length === 1) {
			
			placesService.getDetails({placeId: this.props.routeItems[0].id}, (place, status) => {
				if(status == google.maps.places.PlacesServiceStatus.OK) {
					const marker = new google.maps.Marker({
						map: this.map,
						position: place.geometry.location,
						icon: iconMarker,
						animation: google.maps.Animation.DROP
					});
				}
			});
		}
		else if(this.props.routeItems.length >= 1) {
			const placesService = new google.maps.places.PlacesService(this.map);
			const directionsService = new google.maps.DirectionsService;
			const directionsDisplay = new google.maps.DirectionsRenderer({map: this.map});

			placesService.getDetails({placeId: this.props.routeItems[1].id}, (place, status) => {
				if(status == google.maps.places.PlacesServiceStatus.OK) {
					console.log(place.geometry.location.lat())
				}
			});

			directionsService.route({
			  origin: new google.maps.LatLng(40.84, 14.25),
			  destination: new google.maps.LatLng(49.83, 24.00),
			  travelMode: google.maps.DirectionsTravelMode.DRIVING
			}, (response, status) => {
				// console.log(response);
				if(status === 'OK') {
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
			<div id="map"></div>
		);
	}
}
