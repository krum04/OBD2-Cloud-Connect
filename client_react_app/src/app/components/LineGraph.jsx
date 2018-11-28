import React, { Component } from 'react';
import { firebaseDatabase } from "../containers/firebase";
import Trend from 'react-trend';
import '../styles/LineGraph.css';



export default class LineGraph extends Component{

    constructor(props) {
        super(props);
        var keyVal = this.props.keyVal
        var devId = this.props.devId
       // var nameVal= this.props.nameVal
        this.firebaseDatabase = firebaseDatabase;
        this.database1 = this.firebaseDatabase.ref(devId).child('data').child(keyVal);

        this.state= {
            dValue:0,
            //q: new Array(5),
            q: Array.apply(null, Array(100)).map(Number.prototype.valueOf,50)
        };
    }

    componentDidMount() {
        this.database1.on("value", snap => {
            this.setState({
            dValue: snap.val()
            });
        });
    }
    
    lineGraphData(){
    var numUpdate = parseInt(this.state.dValue)

    if (this.state.q.length <= 100 ){
        this.state.q.push(numUpdate);
    }
    else {
        this.state.q.push(numUpdate);
        this.state.q.shift();
    }
};    

render(){
    this.lineGraphData();
    console.log('Data Array: '+ this.state.q)
    
    console.log(this.state.dValue)
    return(
        <div id='lineGauge'>
        <h1>{this.props.nameVal}</h1> 
        <Trend width={300} height={200}
            smooth
            autoDraw
            autoDrawDuration={5}
            autoDrawEasing="ease-out"
            data={this.state.q}
            gradient={['white']}
            radius={25}
            strokeWidth={4}
            strokeLinecap={'butt'}
            />       
    </div>
)
}
}