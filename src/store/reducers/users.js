import {
	ADD_USER_DATA_REGISTRATION_SUCCESS,
	ADD_USES_COMMENT_SUCCESS,
	CLEAR_STATUS_REQUEST,
	USER_LOGIN_SUCCESS
} from "../action/user";


const initialState = {
	data: [],
	status:[]
};
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
		case ADD_USES_COMMENT_SUCCESS: {
			return {...state, data: action.payload.text}
		}
		case ADD_USER_DATA_REGISTRATION_SUCCESS:{
			return {...state, status:action.payload.data}
		}
		case CLEAR_STATUS_REQUEST:{
			return {...state, status:[]}
		}
		default: {
			return state
		}
	}
}
