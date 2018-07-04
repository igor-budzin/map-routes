import React from 'react';

const mapStyle = require("./mapStyle.json");

export default class GoogleMap extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: new google.maps.LatLng(49.8375807, 24.0022641),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: mapStyle
		});
	}

	render() {
		return(
			<div id="map"></div>
		);
	}
}
