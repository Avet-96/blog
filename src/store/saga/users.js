import {takeLatest, call, put} from 'redux-saga/effects';
import Api from '../../Api'

import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from "../action/user";



export default function* watcher() {
	yield takeLatest(USER_LOGIN_REQUEST, handleRegistration)

}
export  function* handleRegistration(action) {
	try {
		const {email,password}= action.payload
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




