import axios from 'axios';


export const API_URL = 'http://localhost:4000/';
axios.defaults.baseURL = API_URL;

class Api {
	static userLogin(email,password) {
		return axios.post('user/user-sing-in', {email,password})
	}
	static addCommentData(text){
		return axios.post("/add-comet", {text})
	}
	static registrationUser(data){
		return axios.post('user/user-sing-up',data)
	}
}

export default Api
