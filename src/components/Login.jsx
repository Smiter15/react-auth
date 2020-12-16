import React from 'react';
import axios from 'axios';

import { useInput } from '../customHooks';

const Login = () => {
	const [email, emailInput] = useInput({ label: 'Email', type: 'email' });
	const [password, passwordInput] = useInput({
		label: 'Password',
		type: 'password'
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			email,
			password
		};

		await axios.post('login', formData);
	};

	return (
		<section>
			<h1>Login page</h1>
			<form onSubmit={handleSubmit}>
				{emailInput}
				<br />
				{passwordInput}
				<br />
				<button type='submit'>Login</button>
			</form>
		</section>
	);
};

export default Login;
