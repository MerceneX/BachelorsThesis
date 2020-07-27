import React, { Component } from "react";
import firebase from "firebase";

export class SingleImage extends Component {
	state = {
		image: null,
	};

	componentDidMount() {
		const storageRef = firebase.storage().ref();
		let image = null;
		storageRef
			.child(this.props.imagePath)
			.getDownloadURL()
			.then(function (url) {
				var xhr = new XMLHttpRequest();
				xhr.responseType = "blob";
				xhr.onload = function (event) {};
				xhr.open("GET", url);
				xhr.send();
				image = url;
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(() => this.setState({ image }));
	}

	render() {
		return (
			<li>
				<img src={this.state.image} alt="Fotografija" />
			</li>
		);
	}
}

export default SingleImage;
