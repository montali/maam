import React from "react";
import "./App.css";
import Parallax from "parallax-js";

import bg1 from "./res/bg1.jpg";
import fg1 from "./res/fg1.png";
import bg2 from "./res/bg2.jpg";
import fg2 from "./res/fg2.png";
import instalogo from "./res/instalogo.png";

// Width breakpoint = 590px
class Main extends React.Component {
  componentDidMount() {
    this.parallax = new Parallax(this.first);
    this.parallax = new Parallax(this.second);
  }
  componentWillUnmount() {
    this.parallax.disable();
  }

  askPermission() {
    // feature detect
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === "granted") {
            window.addEventListener("deviceorientation", () => {});
          }
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
    }
  }

  render() {
    // We'll need two divs at 50% vw and 100% vh, margin 0, fixed position
    /*        <canvas
          className="fullScreen"
          ref={el => (this.canvas = el)}
          onClick={this.askPermission}
        />
        */
    return (
      <div className="App">
        <div className="backgroundContainer" id="firstPic">
          <ul className="ulContainer" ref={el => (this.first = el)}>
            <li className="layer" data-depth="0.00">
              <img
                src={bg1}
                className="left background parallaxImage"
                alt="Foto1"
              ></img>
            </li>
            <li className="layer" data-depth="0.15">
              <img
                src={fg1}
                className="left foreground parallaxImage"
                alt="Foto1pantaloni"
                id="fg1"
              ></img>
            </li>
          </ul>
        </div>
        <div className="titleContainer">
          <div>
            <h1>créativité pour le désordre public</h1>
            <a href="https://www.instagram.com/maam.ltd/">
              <img src={instalogo} className="logo" alt="Instagram"></img>
            </a>
          </div>
        </div>
        <div className="backgroundContainer" id="secondPic">
          <ul className="ulContainer" ref={el => (this.second = el)}>
            <li className="layer" data-depth="0.00">
              <img
                src={bg2}
                className="right background parallaxImage"
                alt="Foto2"
              ></img>
            </li>
            <li className="layer" data-depth="0.15">
              <img
                src={fg2}
                className="right foreground parallaxImage"
                alt="Foto2pantaloni"
                id="fg2"
              ></img>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function App() {
  return <Main></Main>;
}

export default App;
