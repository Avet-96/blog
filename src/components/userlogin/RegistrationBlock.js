import React, {Component} from 'react';
import {connect} from "react-redux";
import {userRegistration} from "../../store/action/user";
import Home from "../Home";
import {Link} from "react-router-dom";


class RegistrationBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectToReferrer: false
		}
	}

	handelChange = async (ev) => {
		await this.setState({[ev.target.name]: ev.target.value});

	};
	handelSubmit = (ev) => {
		ev.preventDefault();
		this.props.userRegistration(this.state);
	};


	render() {
		const {name, f_name, year, password, r_password, email} = this.state;
		if (this.props.status.status === "Ok") {
			return <Home to="/"/>
		}
		return (
			<>

				<div id="login-box">
					<form className="left" method='POST' onSubmit={this.handelSubmit}>
						<h1>Sign up</h1>
							<input placeholder='username' type="name" name='name' value={name || ''}
							       onChange={this.handelChange}/>
						<input placeholder='enter f_name' type="f_name" name='f_name' value={f_name || ''}
						       onChange={this.handelChange}/>
						<input placeholder='enter year' type="year" name='year' value={year || ''}
						       onChange={this.handelChange}/>
						<input type="password" name='password' value={password || ''} onChange={this.handelChange}/>
						<input type="password" name='r_password' value={r_password || ''} onChange={this.handelChange}/>
						<input placeholder='enter email' type="email" name='email' value={email || ''}
						       onChange={this.handelChange}/>

						<input type="submit" name="signup_submit" value="Sign me up"/>
					</form>

					<div className="right">
						<span className="loginwith">Sign in with<br/>social network</span>

						<button className="social-signin facebook">Log in with facebook</button>
						<button className="social-signin twitter">Log in with Twitter</button>
						<button className="social-signin google">Log in with Google+</button>
					</div>
					<div className="or">OR</div>
				</div>

			</>
		);
	}
}

const mapStateToProps = (state) => ({
	status: state.users.status
});

const mapDispatchToProps = {
	userRegistration
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(RegistrationBlock);
export default Container;
