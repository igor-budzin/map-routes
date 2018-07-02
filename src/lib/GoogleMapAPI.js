export default class GoogleMapAPI {
	constructor() {
		console.log("GoogleMapAPI -------------");
		if(window.google === undefined) {
			throw new Error('Google maps API not supported');
		}

	}

	init() {
		console.log("Hello");
	}

	getPlaceFromQuery(query) {
		console.log('End')
	}
}
