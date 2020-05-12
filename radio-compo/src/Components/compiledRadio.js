import React, { Component } from "react";
import "./radio.css";
import radios from "./radio.js";
export default class RadioStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWindowOpen: false,
      expandAll: false,
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
                <RadioComponent
                  radio={radio}
                  index={index}
                  onClick={this.onSelectHandler}
                  selected={
                    this.state.expandAll === true ||
                    this.state.selectedIndex === index
                  }
                />
              );
            })}
          </ul>
        </div>
        <footer className="footer"></footer>q
      </div>
    );
  }
}

function RadioComponent(props) {
  let radio = props.radio;
  let index = props.index;
  let onClick = props.onClick;
  let isSelected = props.selected;
  return (
    <li
      onClick={() => {
        onClick(index);
      }}
    >
      {radio.name}
      <span>{radio.frequency}</span>
      {isSelected ? <img src={radio.image} className="image" /> : null}
    </li>
  );
}
