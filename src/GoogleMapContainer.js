import React from 'react';
import {withGoogleMap, GoogleMap} from 'react-google-maps';
const mapStyle = require("./mapStyle.json");

export default class GoogleMapContainer extends React.Component {
	constructor(props) {
		super(props);

		// if (navigator.geolocation) {
		// 	navigator.geolocation.getCurrentPosition(function(position) {
		// 		this.lat = position.coords.latitude;
		// 		this.lng = position.coords.longitude;
		// 		// console.log(position.coords.latitude)
		// 	}.bind(this));
		// } else {
		// 	this.lat = 40.756795;
		// 	this.lng = -73.954298;
		// 	console.log('Geolocation is not supported by this browser.');
		// }
	}

	render() {
		// const lat = this.lat;
		// const lng = this.lng;
		// console.log(lat, lng)
		const GoogleMapWrapper = withGoogleMap(props => (
			<GoogleMap
				defaultCenter={{lat: 49.827243599999996, lng: 23.9890562}}
				defaultZoom={14}
				defaultOptions={{styles: mapStyle, mapTypeControl: false}}
				disableDefaultUI={true}
			/>
		));
		return(
			<div>
				<GoogleMapWrapper
					containerElement={<div style={{height: '100vh', width: '100vw'}} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}
