import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { login } from '../actions/auth';
import HomeScreen from '../components/home/HomeScreen';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export default function AppRouter() {
	const dispatch = useDispatch();

	const [cheking, setCheking] = useState(true);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async user => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);

			} else {
				setIsLoggedIn(false);
			}
			setCheking(false);
		});
	}, [dispatch, setCheking, setIsLoggedIn]);

	return (
		<Router>
			<Switch>
				<PublicRoute
					path='/auth'
					component={AuthRouter}
					isLoggedIn={isLoggedIn}></PublicRoute>
				<PrivateRoute
					exact
					path='/'
					component={HomeScreen}
					isLoggedIn={isLoggedIn}></PrivateRoute>
					<Redirect to='/auth/login' />
			</Switch>
		</Router>
	);
}
