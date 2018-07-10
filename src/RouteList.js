import React from 'react';

const List = (props) => {
	if(props.routeItems.length > 0) {
		return (
			props.routeItems.map((item, i) => {
				return (
					<div className="item" key={item.id + i} data-id={item.id}>
						<div className="main-text">{item.main_text}</div>
						<div className="secondary-text">{item.secondary_text}</div>
						<a href="#" className="remove-btn"></a>
					</div>
				);
			})
		);
	}
	else {
		return <span className="empty-message">No point yet</span>
	}
}

export default class RouteList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<List {...this.props} />
			</section>
		);
	}
}
