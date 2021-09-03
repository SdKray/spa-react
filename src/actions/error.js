import { types } from '../types/types';

export const setError = err => ({
	type: types.SetError,
	payload: err,
});

export const removeError = () => ({
	type: types.RemoveError,
});