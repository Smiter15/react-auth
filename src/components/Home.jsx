import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	const [message, setMessage] = useState('You are not logged in!');

	useEffect(() => {
		(async () => {
			const response = await axios.get('user');
			const user = response.data;
			setMessage(`Hi, ${user.first_name} ${user.last_name}`);
		})().catch((err) => {
			setMessage('You are not logged in!');
			console.error(err);
		});
	}, []);

	return (
		<section>
			<h1>{message}</h1>
		</section>
	);
};

export default Home;
