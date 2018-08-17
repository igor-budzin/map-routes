import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
	render () {
		return (
			<div>
				<Link className="" to='/'>Create Route</Link>
				<Link className="" to='/saved'>Saved routes</Link>
				<Link className="" to='/about'>About</Link>
			</div>
		);
	}
}

export default Header;
