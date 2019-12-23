import React, {Component} from 'react';
import {connect} from "react-redux";
import {userLoginFunction} from "../../store/action/user";


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	getUserData = (ev) => {
		ev.preventDefault();
		this.props.userLoginFunction(this.state.email, this.state.password);
		this.setState({email: '', password: ''});
	}

	handelChange = async (ev) => {
		await this.setState({[ev.target.name]: ev.target.value});
		console.log(this.state);

	}

	render() {
		const {email, password} = this.state;
		return (
			<>
				<form method='POST' className='login__form' onSubmit={this.getUserData}>
					<input
						className='login__input'
						type="email" name='email'
						value={email || ''}
						onChange={this.handelChange}
					/>
					<input
						className='login__input'
						type="password" name='password'
						value={password || ''}
						onChange={this.handelChange}
					/>
					<button className='login__button'>Sig In</button>
				</form>
			</>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	userLoginFunction
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
export default Container;

