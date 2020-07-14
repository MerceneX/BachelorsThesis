import React, { Component } from "react";
import UploadImage from "./UploadImage";
import SingleImage from "./SingleImage";
import firebase from "firebase";

export class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    imagePaths: [],
  };

  componentDidMount() {
    const storageRef = firebase.storage().ref();
    var listRef = storageRef.child("images/thumbnail");
    console.log("Hi from getFlies");
    // Find all the prefixes and items.
    const imagePaths = [];
    listRef
      .listAll()
      .then(function (res) {
        res.items.forEach(function (itemRef) {
          imagePaths.push(itemRef.location.path);
          console.log(itemRef);
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
    console.log(this.state.imagePaths);

    return (
      <div>
        <h1>Gallery</h1>
        <ul>
          {this.state.imagePaths.map((imagePath) => (
            //console.log(imagePath)
            <SingleImage imagePath={imagePath} />
          ))}
        </ul>
        <UploadImage />
      </div>
    );
  }
}

export default Gallery;
