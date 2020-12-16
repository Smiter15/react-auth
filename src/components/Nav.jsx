import React from 'react';

import { Link } from 'react-router-dom'

const Nav = () => (
	<nav className='AppNav'>
		<Link to='/'>Home</Link>
		<div className='userNav'>
			<Link to='/login'>Login</Link>
			<Link to='/register'>Register</Link>
		</div>
	</nav>
);

export default Nav;
