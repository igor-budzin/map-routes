import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render () {
		return (
			<header>
				<div className="logo">Logotype</div>
				<nav>
					<Link to="/create">Create Route</Link>
					<Link to="/saved">Saved Routes</Link>
					<Link to="/contact">Contacts</Link>
					<Link to="/about">About</Link>
				</nav>
			</header>
		);
	}
}

export default Header;
