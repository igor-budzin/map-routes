import React from 'react';
import axios from 'axios';

import Autocomplete from './autocomplete';

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputText: '',
			autocompleteArray: []
		};
	}
	
	onChange = (event) => {
		this.setState({inputText: event.target.value});
		const _this = this;
		if(this.state.inputText.length >= 2) {
			axios.get('https:\/\/maps.googleapis.com/maps/api/place/autocomplete/json', {
				params: {
					key: 'AIzaSyBAqxeV5q5jSCVZQatbpJ33MYWHcBg7jK0',
					language: 'uk',
					types: 'geocode',
					input: this.state.inputText
				}
			})
			.then(function (response) {
				if(response.data.status === 'OK') {
					_this.setState({autocompleteArray: response.data.predictions})
					console.dir(response);
				}
				
			})
			.catch(function (error) {
				console.log(error);
			});
		}
		else if(event.target.value.length === 0) {
			this.setState({autocompleteArray: []});
		}
	}

	render() {
		return (
			<aside>
				<input type="text" className="field-from" placeholder="Place" onChange={this.onChange} />
				{this.state.autocompleteArray.length > 0 ? <Autocomplete autocompleteArray={this.state.autocompleteArray} /> : ''}
			</aside>
		);
	}
}
