import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

console.log(import.meta.env)
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_apiKey,
	authDomain: import.meta.env.VITE_APP_authDomain,
	databaseURL: import.meta.env.VITE_APP_databaseURL,
	projectId: import.meta.VITE_APP_projectId,
	storageBucket: import.meta.VITE_APP_storageBucket,
	messagingSenderId: import.meta.VITE_APP_messagingSenderId,
	appId: import.meta.VITE_APP_appId,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
