import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <video autoplay muted loop id="myVideo">
          {/* <source src="/assets/cars1.mp4" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2"/> */}
          <source src="\assets\cars.webm" type="video/webm" />
        </video>
        <div class="content">
          <img src="\assets\logo.gif" alt="Italian Trulli" />
        </div>
      </div>
    );
  }
}
