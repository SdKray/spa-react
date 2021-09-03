import { types } from '../types/types';

const initialState = {
	msgError: null,
};

export const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SetError:
			return {
				...state,
				msgError: action.payload,
			};
		case types.RemoveError:
			return {
				...state,
				msgError: null,
			};
		default:
			return state;
	}
};
