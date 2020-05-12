import React, { Component } from "react";
import "./radio.css";
import radios from "./radio.js";
import { FaChevronLeft, FaPowerOff } from "react-icons/fa";

export default class RadioStations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSelectHandler = (station) => {
    this.setState((state) => {
      let st = station;
      if (state.selectedStation) {
        if (state.selectedStation.id === station.id) {
          st = null;
        }
      }
      return {
        selectedStation: st,
      };
    });
  };

  createEachRadioElement = () => {
    return radios.map((radio, index) => {
      radio.id = index;
      let isSelected =
        this.state.selectedStation && this.state.selectedStation.id === index;
      return (
        <li
          className="station-row"
          onClick={() => {
            this.onSelectHandler(radio);
          }}
        >
          {isSelected ? (
            <div className="station-detail">
              <div className="sign">-</div>
              <img src={radio.image} className="image" alt="" />
              <div className="sign">+</div>
            </div>
          ) : null}
          <div className="station-info">
            <span className="name">{radio.name}</span>
            <span className="frequency">{radio.frequency}</span>
          </div>
        </li>
      );
    });
  };

  currentlyPlaying = () => {
    let footerContent = null;
    if (this.state.selectedStation) {
      footerContent = (
        <>
          <div className="footer-title"> Currently Playing</div>
          <div className="footer-current">
            {this.state.selectedStation.name}
          </div>
        </>
      );
    }
    return footerContent;
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <div className="left-items">
            <FaChevronLeft style={{ color: "white" }} />
          </div>
          <div className="title">STATIONS</div>
          <div className="right-items">
            <FaPowerOff style={{ color: "white" }} />
          </div>
        </header>

        <div className="dark-background">
          <div className=" dark-background stations-band">
            <ul> {this.createEachRadioElement()}</ul>
          </div>
        </div>
        <footer className=" dark-background footer">
          {this.currentlyPlaying()}
        </footer>
      </div>
    );
  }
}
