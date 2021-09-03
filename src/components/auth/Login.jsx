import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword } from '../../actions/auth';

export default function Login() {	
    const dispatch = useDispatch();
	// const { loading } = useSelector(state => state.ui);

	const [formValues, handleInputChange] = useForm({
		email: 'test@hotmail.com',
		password: '123456',
	});

	const { email, password } = formValues;

	const handleLogin = e => {
		e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
	};

	return (
		<div>
			<h1>Loing</h1>
			<form onSubmit={handleLogin}>
				<label htmlFor='email'>email</label>
				<input
					type='text'
					name='email'
					value={formValues.email}
					onChange={handleInputChange}
				/>
				<label htmlFor='password'>password</label>
				<input
					type='password'
					name='password'
					value={formValues.password}
					onChange={handleInputChange}
				/>
				<button type='submit'>Login</button>
			</form>
			<Link className='link' to='/auth/register'>
				Create new account
			</Link>
		</div>
	);
}
