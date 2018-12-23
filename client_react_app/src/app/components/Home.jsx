import React, { Component } from "react";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <video autoPlay muted loop id="myVideo">
          <source src="\assets\cars.webm" type="video/webm" />
        </video>
        <div className="content">
          <img src="\assets\logo.gif" alt="Italian Trulli" />
        </div>
      </div>
    );
  }
}
