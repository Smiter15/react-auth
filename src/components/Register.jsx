import React from 'react';
import axios from 'axios';

import { useInput } from '../customHooks';

const Register = () => {
	const [firstName, firstNameInput] = useInput({
		label: 'First name',
		type: 'text'
	});
	const [lastName, lastNameInput] = useInput({
		label: 'Last name',
		type: 'text'
	});
	const [email, emailInput] = useInput({ label: 'Email', type: 'email' });
	const [password, passwordInput] = useInput({
		label: 'Password',
		type: 'password'
	});
	const [passwordConfirm, passwordConfirmInput] = useInput({
		label: 'Confirm password',
		type: 'password'
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			first_name: firstName,
			last_name: lastName,
			email,
			password,
			password_confirm: passwordConfirm
		};

		await axios.post('register', formData);
	};

	return (
		<section>
			<h1>Register page</h1>
			<form onSubmit={handleSubmit}>
				{firstNameInput}
				<br />
				{lastNameInput}
				<br />
				{emailInput}
				<br />
				{passwordInput}
				<br />
				{passwordConfirmInput}
				<br />
				<button type='submit'>Register</button>
			</form>
		</section>
	);
};

export default Register;
