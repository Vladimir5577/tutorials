import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav () {

	const navStyle = {
		color: 'white'
	}

	return (
		<nav>
			<Link style={ navStyle } to="/">
				<h3>My App</h3>
			</Link>
			<ul className="nav-links" to="/about">
				<Link style={ navStyle } to="/about">
					<li>About</li>
				</Link>
				<Link style={ navStyle } to="/database">
					<li>Database</li>
				</Link>
				<Link style={ navStyle } to="/form" >
					<li>Add Worker</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav