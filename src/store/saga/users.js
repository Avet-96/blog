import {takeLatest, call, put} from 'redux-saga/effects';
import Api from '../../Api'

import {
	ADD_USER_DATA_REGISTRATION_FAIL,
	ADD_USER_DATA_REGISTRATION_REQUEST, ADD_USER_DATA_REGISTRATION_SUCCESS,
	ADD_USES_COMMENT_FAIL,
	ADD_USES_COMMENT_REQUEST,
	ADD_USES_COMMENT_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS
} from "../action/user";



export default function* watcher() {
	yield takeLatest(USER_LOGIN_REQUEST, handleRegistration);
	yield takeLatest(ADD_USES_COMMENT_REQUEST,addUsersComment);
	yield takeLatest(ADD_USER_DATA_REGISTRATION_REQUEST, userRegistration)

}
export  function* handleRegistration(action) {
	try {
		const {email,password}= action.payload;
		const { data } = yield call(Api.userLogin, email,password);
		yield put({
			type:USER_LOGIN_SUCCESS,
			payload: {data}
		})
	}catch (e) {
		yield put({
			type:USER_LOGIN_FAIL,
			message:e.message
		})
	}
}

export function* addUsersComment(action) {
	try {
		const {data}= yield call(Api.addCommentData, action.payload.text);
		yield put({
			type:ADD_USES_COMMENT_SUCCESS,
			payload:{data}
		})

	}catch (e) {
		yield put({
			type:ADD_USES_COMMENT_FAIL,
			message:e.message
		})
	}
}

export function* userRegistration(action) {
	try {
		const {data} = yield call(Api.registrationUser, action.payload.data);
		yield put({
			type:ADD_USER_DATA_REGISTRATION_SUCCESS,
			payload:{data}
		})
	}catch (e) {
		yield put({
			type:ADD_USER_DATA_REGISTRATION_FAIL,
			message:e.message
		})
	}
}


