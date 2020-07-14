import React, { Component } from "react";
import firebase from "firebase";

export class UploadImage extends Component {
  constructor(props) {
    super(props);
  }
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
  handleUpload = () => {
    const uploadTask = this.storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {});
      }
    );
    console.log(this.state.image);
  };

  render() {
    return (
      <div>
        <h1>Upload Image</h1>
        <input
          type="file"
          name="image"
          id="image"
          onChange={this.handleChange}
        />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default UploadImage;
