import React, { Component } from "react";
import "./radio.css";

export default class RadioStations extends Component {
  constructor(props) {
    super(props);
    this.state = { isWindowOpen: false, word: "" };
  }
  onSelectHandler = () => {
    this.setState({ isWindowOpen: true, word: "selected" });
  };
  render() {
    return (
      <div className="stations-container">
        <header className="header">Stations</header>
        <div className="stations-band">
          <ul className="stations">
            <li onClick={this.onSelectHandler}>
              Putin Fm <span>66.6</span>
              <div>{this.state.word}</div>
            </li>
            <li>
              Dribble Fm <span>66.6</span>
              {/* <div>{this.state.word}</div> */}
            </li>
            <li>
              Doga Fm <span>66.6</span>
              {/* <div>{this.state.word}</div> */}
            </li>
            <li>
              Balladas Fm <span>66.6</span>
              {/* <div>{this.state.word}</div> */}
            </li>
          </ul>
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}
