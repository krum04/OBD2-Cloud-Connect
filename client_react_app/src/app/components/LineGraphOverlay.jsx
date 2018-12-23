import React, { Component } from 'react';
import { firebaseDatabase } from "../containers/firebase";
import Trend from 'react-trend';
import '../styles/LineGraphOverlay.css';



export default class LineGraph extends Component{

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