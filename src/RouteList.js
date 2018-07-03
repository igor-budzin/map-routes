import React from 'react';

export default class RouteList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				{
					this.props.routeItems.map((item) => {
						return (
							<div className="item" key={item.id} data-id={item.id}>
								<div className="main-text">{item.main_text}</div>
								<div className="secondary-text">{item.secondary_text}</div>
							</div>
						)
					})
				}
			</section>
		);
	}
}
