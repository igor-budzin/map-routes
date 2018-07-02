import React from 'react';
import axios from 'axios';
// import { SortableContainer } from 'react-anything-sortable';

import Autocomplete from './autocomplete';
import Google from './lib/GoogleMapAPI';
const GoogleMapAPI = new Google();

// import 'react-anything-sortable/sortable.css';

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
		if(this.state.inputText.length >= 2) {
			GoogleMapAPI.getPlaceFromQuery(this.state.inputText, (response, status) => {
				_this.setState({autocompleteArray: response})
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
		this.buildRoute();
	}

	buildRoute = () => {

	}

	render() {
		return (
			<React.Fragment>
				<aside>
					<input ref={(node) => {this.fieldFrom = node}} type="text" className="field-from" placeholder="Place" onChange={this.onChange} />
					{this.state.autocompleteArray.length > 0 ? <Autocomplete handlePickAutocomplete={this.handlePickAutocomplete} autocompleteArray={this.state.autocompleteArray} /> : ''}
				</aside>

				<section>
					{
						this.state.routeItems.map((item) => {
							return (
								<div className="item" key={item.id}>
									<div className="main-text">{item.main_text}</div>
									<div className="secondary-text">{item.secondary_text}</div>
								</div>
							)
						})
					}
				</section>
			</React.Fragment>
		);
	}
}
