import React, { Component } from "react";
import firebase from "firebase";
import PropTypes from "prop-types";

export class SingleImage extends Component {
  static propTypes = {};
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
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function (event) {
          var blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
        image = url;
        // Or inserted into an <img> element:
      })
      .catch(function (error) {
        // Handle any errors
      })
      .then(() => this.setState({ image }));
  }

  render() {
    return (
      <li>
        <img src={this.state.image} />
      </li>
    );
  }
}

export default SingleImage;
