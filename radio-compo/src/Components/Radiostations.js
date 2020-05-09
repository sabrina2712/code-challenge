import React, { Component } from "react";
import "./radio.css";
import radios from "./radio.js";
export default class RadioStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWindowOpen: false,
      isClicked: false,
    };
  }
  onSelectHandler = (index) => {
    this.setState({
      isWindowOpen: true,
      selectedIndex: index,
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
                <li
                  onClick={() => {
                    this.onSelectHandler(index);
                  }}
                >
                  {radio.name}
                  <span>{radio.frequency}</span>
                  {this.state.selectedIndex === index ? (
                    <img src={radio.image} className="image" />
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
