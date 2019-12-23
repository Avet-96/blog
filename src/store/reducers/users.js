import {USER_LOGIN_SUCCESS} from "../action/user";


const initialState = {};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS: {
			return {
				...state,
				log: action.payload.data.status !== "Error" ?
					localStorage.setItem('token', action.payload.data.token)
					: undefined

			}
		}

		default: {
			return state
		}
	}
}
