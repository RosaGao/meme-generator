import React, { Component } from "react";
import Header from "./components/Header"
import Control from "./components/Control"
import Output from "./components/Output"
import Footer from "./components/Footer"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E",

      texts: {
        topText: "",
        bottomText: ""
      }

    }
  }

  generateMeme = (images) => {
    const image = images[Math.floor(Math.random() * images.length)]; 
    this.setState({
      imageSrc: image.url
    });
  }

  //prevent default for image and text
  // use async
  updateText = (texts) => {
    this.setState({
      texts: {...texts}
    });
  }

  render() {
    return (
      <>
        <Header />
        <Control generateMeme={this.generateMeme} texts={this.state.texts} updateText={this.updateText}/>
        <Output imageSrc={this.state.imageSrc} texts={this.state.texts} /> 
        <Footer />
      </>
    );
  }


}

export default App;
