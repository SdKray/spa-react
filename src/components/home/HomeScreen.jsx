import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';


export default function HomeScreen() {
	const dispatch = useDispatch();

    const handleLogout = () => {
		dispatch(startLogout());
	};
	return (
		<div>
			Hola Mundo en una SPA de react
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
