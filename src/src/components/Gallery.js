import React, { Component } from "react";
import UploadImage from "./UploadImage";
import SingleImage from "./SingleImage";
import firebase from "firebase";

export class Gallery extends Component {
	state = {
		imagePaths: [],
	};

	componentDidMount() {
		const storageRef = firebase.storage().ref();
		var listRef = storageRef.child("images/thumbnail");
		const imagePaths = [];
		listRef
			.listAll()
			.then(function (res) {
				res.items.forEach(function (itemRef) {
					imagePaths.push(itemRef.location.path);
				});
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(() => {
				this.setState({
					imagePaths,
				});
			});
	}

	render() {
		return (
			<div>
				<h1>Moja Galerija</h1>
				<ul>
					{this.state.imagePaths.map((imagePath) => (
						<SingleImage imagePath={imagePath} />
					))}
				</ul>
				<UploadImage />
			</div>
		);
	}
}

export default Gallery;
