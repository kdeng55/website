import React, { Component } from "react";
import ReactImageFadeIn from "react-image-fade-in";

class ImageFadeIn extends Component {
  render() {
    const { imageSrc, width, height, style} = this.props; // Destructure props

    return <ReactImageFadeIn 
    width={width} 
    height={height} 
    style={style} 
    src={imageSrc} />;
  }
}

export default ImageFadeIn;