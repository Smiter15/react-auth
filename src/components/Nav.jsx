import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Nav = () => {
	const logout = async () => {
		await axios.post('logout', {});
	};

	return (
		<nav className='AppNav'>
			<Link to='/'>Home</Link>
			<div className='userNav'>
				<Link to='/login'>Login</Link>
				<Link to='/register'>Register</Link>
				<button onClick={logout}>Logout</button>
			</div>
		</nav>
	);
};

export default Nav;
