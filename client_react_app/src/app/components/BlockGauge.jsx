import React, { Component } from 'react';
import { firebaseDatabase } from "./firebase";
import '../styles/BlockGauge.css';

export default class BlockGuage extends Component{

  constructor(props) {
    super(props);
    var keyVal = this.props.keyVal;
    var devId = this.props.devId;
    var fieldName = this.props.fieldName;
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
    <div class='BlockGauge'>
    <h2>{this.props.fieldName}</h2>
    <h1>{this.state.gaugeVal}</h1>
    </div>

    )
  
}
}  