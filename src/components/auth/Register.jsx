import React from 'react';
import validator from 'validator';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/error';
import { StartRegisterWithEmailPasswordName } from '../../actions/auth';

export default function Register() {
	const dispatch = useDispatch();
	const { msgError } = useSelector(state => state.error);
	// dispatch(removeError());

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formValues;

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Emails is not valid'));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError('psw should be at least 6 characters and match'));
			return false;
		}
		dispatch(removeError());
		return true;
	};

	const handleRegister = e => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(StartRegisterWithEmailPasswordName(email, password, name));
		}
	};
	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={handleRegister}>
				{msgError && <div>{msgError}</div>}
				<input
					type='text'
					name='name'
					placeholder='Name'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type='email'
					name='email'
					placeholder='Email'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					name='password2'
					placeholder='Confirm password'
					autoComplete='off'
					value={password2}
					onChange={handleInputChange}
				/>
				<button type='submit'>Register</button>
			</form>
			<Link className='link mt-5 mb-5' to='/auth/login'>
				Already register?
			</Link>
		</div>
	);
}
