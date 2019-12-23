import React, {Component} from 'react';
import {connect} from "react-redux";



class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}


	render() {
		return (
			<div>
				Hello
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Registration);
export default Container;

