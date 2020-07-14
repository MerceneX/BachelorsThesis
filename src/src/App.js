import React, { Component } from "react";
import Auth from "./components/AurthUI";
import firebase from "firebase";
import "./App.css";

const firebaseConfig = {
	apiKey: "AIzaSyCCTJko9MfGj2TpOp_KWg10fvga6k7Y6is",
	authDomain: "diplomska-poc.firebaseapp.com",
	databaseURL: "https://diplomska-poc.firebaseio.com",
	projectId: "diplomska-poc",
	storageBucket: "diplomska-poc.appspot.com",
	messagingSenderId: "212414905382",
	appId: "1:212414905382:web:31780657bdc25830bc7ae7",
	measurementId: "G-KJ9YB0LGXB",
};

firebase.initializeApp(firebaseConfig);

export class App extends Component {
	constructor(props) {
		super(props);

		// Bind the this context to the handler function
		this.handler = this.handler.bind(this);

		// Set some state
		this.state = { isSignedIn: false };
	}

	state = { isSignedIn: false };

	handler(user) {
		this.setState({
			isSignedIn: !!user,
		});
	}
	render() {
		return (
			<div className="App">
				{this.state.isSignedIn ? (
					<h1>Signed In!</h1>
				) : (
					<Auth isSignedIn={this.handler} />
				)}
			</div>
		);
	}
}

export default App;
