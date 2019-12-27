import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import RegistrationBlock from "./components/userlogin/RegistrationBlock";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/registration" component={RegistrationBlock}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
