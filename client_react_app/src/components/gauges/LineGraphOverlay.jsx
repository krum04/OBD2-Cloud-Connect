import React, { Component } from 'react';
import { firebaseDatabase } from "./firebase";
import Trend from 'react-trend';
import './LineGraphOverlay.css';



export default class LineGraph extends Component{

    /*constructor(props) {
        super(props);
        var keyVal = this.props.keyVal
        var devId = this.props.devId
        var nameVal= this.props.nameVal
        this.firebaseDatabase = firebaseDatabase;
        this.database1 = this.firebaseDatabase.ref(devId).child('data').child(keyVal1);
        this.database2 = this.firebaseDatabase.ref(devId).child('data').child(keyVal2);

        this.state= {
            dValue1:0,
            //q: new Array(5),
            q1: Array.apply(null, Array(100)).map(Number.prototype.valueOf,50)
        };
        this.state= {
            dValue2:0,
            //q: new Array(5),
            q2: Array.apply(null, Array(100)).map(Number.prototype.valueOf,50) 
        }
    }

    componentDidMount() {
        this.database1.on("value", snap => {
            this.setState({
            dValue1: snap.val()
            });
        });

        this.database2.on("value", snap => {
            this.setState({
            dValue1: snap.val()
            });
        });
    }
    
    lineGraphData1(){
    var numUpdate = parseInt(this.state.dValue)

    if (this.state.q.length <= 100 ){
        this.state.q.push(numUpdate);
    }
    else {
        this.state.q.push(numUpdate);
        this.state.q.shift();
    }
}; */   


render(){
    return(
    <div id='lineGaugeOverlay'>
        <div class='overlay'>
        <Trend width={300} height={200}
                smooth
                autoDraw
                autoDrawDuration={4000}
                autoDrawEasing="ease-out"
                data={[1,2,3,4,5]}
                gradient={['white']}
                radius={25}
                strokeWidth={4}
                strokeLinecap={'butt'}
                />
        </div>
        <div class='overlay'>      
        <Trend width={300} height={200}
                smooth
                autoDraw
                autoDrawDuration={4000}
                autoDrawEasing="ease-out"
                data={[5,4,3,2,1]}
                gradient={['white']}
                radius={25}
                strokeWidth={4}
                strokeLinecap={'butt'}
                />
        </div>          
    </div>
)
}
}