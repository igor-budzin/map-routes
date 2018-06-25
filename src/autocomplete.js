import React from 'react';

export default class Autocomplete extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={"autocomplete" + (this.props.autocompleteArray.length > 0 ? ' visible' : '')}>
			{
				this.props.autocompleteArray.map((item) => {
					return (
						<div className="item" key={item.id}>
							<div className="main-text">{item.structured_formatting.main_text}</div>
							<div className="secondary-text">{item.structured_formatting.secondary_text}</div>
						</div>
					)
				})
			}
			</div>
		);
	}
}
