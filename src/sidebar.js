import React from 'react';
import axios from 'axios';

import Autocomplete from './autocomplete';
import RouteList from './RouteList'

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputText: '',
			autocompleteArray: [],
			routeItems: []
		};

		this.autocompleteService = new google.maps.places.AutocompleteService();
	}

	onChange = (event) => {
		this.setState({inputText: event.target.value});
		const _this = this;
		if(this.state.inputText.length >= 1) {
			this.autocompleteService.getQueryPredictions({input: this.state.inputText}, (response) => {
				if(Array.isArray(response)) {
					console.log(response)
					_this.setState({autocompleteArray: response});
				}
				else {
					this.setState({autocompleteArray: []});
				}
			});
		}
		else if(event.target.value.length === 0) {
			this.setState({autocompleteArray: []});
		}
	}

	handlePickAutocomplete = (item) => {
		this.fieldFrom.value = '';
		this.setState({autocompleteArray: []});
		const tmpRouteItemsArray = this.state.routeItems;
		tmpRouteItemsArray.push(item);
		this.setState({routeItems: tmpRouteItemsArray});
		this.props.getRouteItems(tmpRouteItemsArray);
	}

	render() {
		return (
			<React.Fragment>
				<aside>
					<input ref={(node) => {this.fieldFrom = node}} type="text" className="field-from" placeholder="Place" onChange={this.onChange} />
					{this.state.autocompleteArray.length > 0 ? <Autocomplete handlePickAutocomplete={this.handlePickAutocomplete} autocompleteArray={this.state.autocompleteArray} /> : ''}
				</aside>
				<RouteList routeItems={this.state.routeItems} />
			</React.Fragment>
		);
	}
}
