import React, { Component } from "react";
import firebase from "firebase";

export class UploadImage extends Component {
	storage = null;
	state = {
		image: null,
	};
	componentDidMount() {
		this.storage = firebase.storage();
	}

	handleChange = (e) => {
		if (e.target.files[0]) {
			this.setState({ image: e.target.files[0] });
		}
	};
	render() {
		return (
			<div>
				<h1>Naložite sliko</h1>
				<input
					type="file"
					name="image"
					id="image"
					onChange={this.handleChange}
				/>
				<button onClick={this.handleUpload}>Naloži!</button>
			</div>
		);
	}

	handleUpload = () => {
		const uploadTask = this.storage
			.ref(`images/${this.state.image.name}`)
			.put(this.state.image);
		uploadTask.on(
			"state_changed",
			(snapshot) => {},
			(error) => {
				console.log(error);
			}
		);
	};
}

export default UploadImage;
