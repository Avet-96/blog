import React, {Component} from 'react';
import {connect} from "react-redux";
import Login from "../userlogin/Login";
import Registration from "../userlogin/Registration";


class MainHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	exitProfil=()=>{
		localStorage.removeItem('token');
		alert('Exit your profile')
	};
	render() {
		return (
			<div className='main__header'>
				<h1 className='blog__logo'>Steve Jobs</h1>
				<div>
					<Login/>
				</div>
				<div>
					<Registration/>
				</div>
				<button onClick={this.exitProfil} className='login__button'>Exit</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainHeader);
export default Container;

