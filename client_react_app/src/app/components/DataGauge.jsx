import React, { Component } from 'react';
import { firebaseDatabase } from "../containers/firebase";
import Gauge from "react-svg-gauge";
import '../styles/DataGauge.css';

export default class DataGauge extends Component{

  constructor(props) {
    super(props);
    var keyVal = this.props.keyVal
    var devId = this.props.devId
    //console.log('This is props')
    //console.log(this.props.name)
    this.firebaseDatabase = firebaseDatabase;
    this.database = this.firebaseDatabase.ref(devId).child('data').child(keyVal);
    
    this.state = {
      gaugeVal: 0,
      };
  }
  componentDidMount() {
    this.database.on("value", snap => {
      this.setState({
        gaugeVal: snap.val()
      });
    });
    
    
  }

  render(){
    return(
    <div class="dGauge">
     <Gauge
      value={Math.round(this.state.gaugeVal)}
      min={this.props.minVal}
      max={parseInt(this.props.maxVal)}
      label={this.props.name}
      color='#2892D7'
      //backgroundColor = "#2892D7"
      width='200'
      height='200'
    
      
    />
      {console.log(this.state.gaugeVal)}
   </div>
    )
  }
  }