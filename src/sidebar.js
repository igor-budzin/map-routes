import React from 'react';
import axios from 'axios';

import Autocomplete from './autocomplete';
import RouteList from './RouteList'

import Google from './lib/GoogleMapAPI';

const GoogleMapAPI = new Google();

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputText: '',
			autocompleteArray: [],
			routeItems: []
		};
	}

	onChange = (event) => {
		this.setState({inputText: event.target.value});
		const _this = this;
		if(this.state.inputText.length >= 1) {
			GoogleMapAPI.getPlaceFromQuery(this.state.inputText, (response, status) => {
				if(Array.isArray(response)) {
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
		const tmp = this.state.routeItems;
		tmp.push(item);
		this.setState({routeItems: tmp});
	}

	render() {
		return (
			<React.Fragment>
				<aside>
					<input ref={(node) => {this.fieldFrom = node}} type="text" className="field-from" placeholder="Place" onChange={this.onChange} />
					{this.state.autocompleteArray.length > 0 ? <Autocomplete handlePickAutocomplete={this.handlePickAutocomplete} autocompleteArray={this.state.autocompleteArray} /> : ''}
				</aside>
				{this.state.routeItems.length > 0 ? <RouteList routeItems={this.state.routeItems} /> : ''}
			</React.Fragment>
		);
	}
}
