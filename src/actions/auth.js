
import { types } from '../types/types';
import { firebase } from '../firebase/firebase-config';
// import { finishLoading, startLoading } from './ui';
// import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {
	return dispatch => {
		// dispatch(startLoading());
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				// dispatch(finishLoading());
			})
			.catch(e => {
				// dispatch(finishLoading());
				// Swal.fire('Error', e.message, 'error');
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
				// Swal.fire('Error', e.message, 'error');
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

