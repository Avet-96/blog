import React, {Component} from 'react';
import {connect} from "react-redux";
import MainHeader from "./main/MainHeader";
import MainMain from "./main/MainMain";
import MainFooter from "./main/MainFooter";



class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}


	render() {
		return (
			<div className='body'>
			<MainHeader/>
			<div className='body__main'>
				<MainMain/>
			</div>
			<MainFooter/>
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
)(Home);
export default Container;

