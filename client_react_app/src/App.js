import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase";
//import { FB_CONFIG } from "./config";
import { firebaseDatabase } from "firebase";
import Gauge from "react-svg-gauge";

class App extends Component {
  constructor() {
    super();

    //this.app = firebase.initializeApp(FB_CONFIG);
    this.firebaseDatabase = firebaseDatabase;
    this.database = this.firebaseDatabase.ref("object").child("SPEED");
    this.state = {
      speed: 30
    };
  }
  componentDidMount() {
    this.database.on("value", snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <h1>{this.state.speed}</h1>

        <h1>Gauge</h1>
        <Gauge
          value={this.state.speed.toString()}
          min="0"
          max={parseInt("100")}
          label="Speed"
        />
      </div>
    );
  }
}

export default App;
