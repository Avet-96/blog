export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export function userLoginFunction(email,password) {
	return {
		type: USER_LOGIN_REQUEST, payload: { email,password }
	}
}
