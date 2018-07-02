export default class GoogleMapAPI {
	constructor() {
		if(window.google === undefined) {
			throw new Error('Google maps API not supported');
		}

		this.autocompleteService = new google.maps.places.AutocompleteService();
		this.placesServiceStatusOK = google.maps.places.PlacesServiceStatus.OK;
	}

	getPlaceFromQuery(query, callback) {
		if(this.placesServiceStatusOK) {
			return this.autocompleteService.getQueryPredictions({input: query}, callback);
		}
		else {
			throw new Error('PlacesServiceStatus: error');
		}
	}
}
