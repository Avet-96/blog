import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {goRegistrationPage} from "../../store/action/user";


class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}


	render() {
		return (
			<>
				<Link className='login__button' onClick={() => this.props.goRegistrationPage()}
				      to='/registration'>Registration</Link>
			</>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	goRegistrationPage
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Registration);
export default Container;

