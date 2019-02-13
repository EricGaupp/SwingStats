import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE
} from "../actions/userActions";

const initialState = {
	isFetching: false,
	isAuthenticated: false,
	loginError: false,
	errorMessage: null,
	id: null,
	firstName: null,
	lastName: null,
	email: null,
	token: null
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_USER_REQUEST:
			return Object.assign({}, { ...state }, { isFetching: true });
		case FETCH_USER_SUCCESS:
			return Object.assign(
				{},
				{ ...state },
				{
					isAuthenticated: true,
					token: action.token,
					id: action.id,
					firstName: action.firstName,
					lastName: action.lastName,
					email: action.email,
					isFetching: !state.isFetching,
					loginError: false,
					errorMessage: null
				}
			);
		case FETCH_USER_FAILURE:
			return Object.assign(
				{},
				{ ...state },
				{
					isFetching: !state.isFetching,
					loginError: action.loginError,
					errorMessage: action.errorMessage
				}
			);
		default:
			return state;
	}
}

export default userReducer;
