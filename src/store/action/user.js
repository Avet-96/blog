export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export function userLoginFunction(email,password) {
	return {
		type: USER_LOGIN_REQUEST, payload: { email,password }
	}
}

export const ADD_USES_COMMENT_REQUEST= 'ADD_USES_COMMENT_REQUEST';
export const ADD_USES_COMMENT_SUCCESS= 'ADD_USES_COMMENT_SUCCESS';
export const ADD_USES_COMMENT_FAIL= 'ADD_USES_COMMENT_FAIL';

export function addUsersComment(text) {
	return{
		type:ADD_USES_COMMENT_REQUEST, payload: {text}
	}
}

export const ADD_USER_DATA_REGISTRATION_REQUEST = 'ADD_USER_DATA_REGISTRATION_REQUEST';
export const ADD_USER_DATA_REGISTRATION_SUCCESS = 'ADD_USER_DATA_REGISTRATION_SUCCESS';
export const ADD_USER_DATA_REGISTRATION_FAIL = 'ADD_USER_DATA_REGISTRATION_FAIL';

export function userRegistration(data) {
	return{
		type:ADD_USER_DATA_REGISTRATION_REQUEST, payload:{data}
	}
}
export const CLEAR_STATUS_REQUEST = 'CLEAR_STATUS_REQUEST';
export function goRegistrationPage() {
	return{
		type:CLEAR_STATUS_REQUEST
	}
}
