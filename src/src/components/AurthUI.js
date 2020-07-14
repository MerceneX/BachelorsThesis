import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
var firebase = require("firebase");

export class AurthUI extends Component {
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
		callbacks: {
			signInSuccess: () => false,
		},
	};
	render() {
		return (
			<StyledFirebaseAuth
				uiConfig={this.uiConfig}
				firebaseAuth={firebase.auth()}
			/>
		);
	}
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged((user) => this.props.isSignedIn(user));
	};
}

export default AurthUI;
