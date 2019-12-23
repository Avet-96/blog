import React, {Component} from 'react';
import {connect} from "react-redux";


class MainFooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			commentArr: [],
		}
	}

	handelChange = (ev) => {
		this.setState({text: ev.target.value})
	};
	handelClick = async () => {
		let token = localStorage.getItem('token');
		if (!token || token === undefined){
			alert('Please go to your profile or register');
			this.setState({text:''})
		}else {
			await this.setState({
				commentArr: [...this.state.commentArr, this.state.text],
				text: ''
			});
		}

	};

	render() {
		return (
			<div className='footer__block'>
				<div>
					{this.state.commentArr ? this.state.commentArr.map((i) => (
					<p className='main__text' key={i}>{i}</p>
				)) : null}
				</div>
				<div>
					<textarea className="input100" value={this.state.text}
					          onChange={this.handelChange}
					          name="message" placeholder="Your message here..."/>
					<button
						onClick={this.handelClick}
						className='login__button'>Sig In
					</button>
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainFooter);
export default Container;

