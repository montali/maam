import React from "react";
import "./App.css";
import Parallax from "parallax-js";

import bg1 from "./res/bg1.png";
import fg1 from "./res/fg1.png";
//import bg2 from "./res/bg2.png";
//import fg2 from "./res/fg2.png";

class Main extends React.Component {
  componentDidMount() {
    this.parallax = new Parallax(this.first);
    this.parallax = new Parallax(this.second);
  }
  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    // We'll need two divs at 50% vw and 100% vh, margin 0, fixed position
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
            <li className="layer" data-depth="0.1">
              <img
                src={fg1}
                className="left foreground parallaxImage"
                alt="Foto1pantaloni"
                id="fg1"
              ></img>
            </li>
          </ul>
        </div>
        <div className="backgroundContainer" id="secondPic">
          <ul className="ulContainer" ref={el => (this.second = el)}>
            <li className="layer" data-depth="0.00">
              <img
                src={bg1}
                className="right background parallaxImage"
                alt="Foto1"
              ></img>
            </li>
            <li className="layer" data-depth="0.1">
              <img
                src={fg1}
                className="right foreground parallaxImage"
                alt="Foto1pantaloni"
                id="fg2"
              ></img>
            </li>
          </ul>
        </div>
        <div className="titleContainer">
          <h1>Sergio Mattarello</h1>
        </div>
      </div>
    );
  }
}

function App() {
  return <Main></Main>;
}

export default App;
