import React, { useState } from 'react';

import axios from 'axios';

const Register = () => {
	const useInput = ({ type, label }) => {
		const [value, setValue] = useState('');
		const input = (
			<>
				<label>{label}</label>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					type={type}
				/>
			</>
		);
		return [value, input];
	};

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
		console.log('submit', formData);
		// const response = await fetch('http://localhost:8000/register', {
		// 	method: 'POST',
		// 	headers: {
		// 		'content-type': 'application/json'
		// 	},
		// 	data: formData
		// });
		axios('http://localhost:8000/register', {
			method: 'POST',
			data: formData
		})
			.then((res) => console.log(res))
			.catch((err) => console.log('ERRREREERE', err));
		// const data = await response.json();
		// console.log('data', data);
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
