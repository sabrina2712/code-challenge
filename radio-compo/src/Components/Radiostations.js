import React, { Component } from "react";
import "./radio.css";
import radios from "./radio.js";
export default class RadioStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWindowOpen: false,
      word: "",
      image_path: "",
      isClicked: false,
    };
  }
  onSelectHandler = () => {
    this.setState({
      isWindowOpen: true,
      word: "selected",
      isClicked: true,
      image_path: "",
    });
  };

  onPutinClick = () => {};
  render() {
    return (
      <div className="stations-container">
        <header className="header">Stations</header>
        <div className="stations-band">
          <ul>
            {radios.map((radio, index) => {
              return (
                <li onClick={this.onSelectHandler}>
                  {radio.name}
                  <span>{radio.frequency}</span>
                  {this.state.isClicked === true ? (
                    <img src={radio.image} />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}
