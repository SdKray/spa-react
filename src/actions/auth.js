
import { types } from '../types/types';
import { firebase } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
	return dispatch => {

		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));

			})
			.catch(e => {

				alert(e.message.replace('Firebase:',''));
			});
	};
};

export const StartRegisterWithEmailPasswordName = (email, pwd, name) => {
	return dispatch => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, pwd)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });
				dispatch(login(user.uid, user.displayName));
			})
			.catch(e => {
			});
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const startLogout = () => {
	return async dispatch => {
		await firebase.auth().signOut();
		dispatch(logout());
		dispatch(noteLogout())
	};
};

export const logout = () => ({
	type: types.logout,
});

