import React, { Component } from 'react';
import { firebaseDatabase } from "./firebase";

export default class Raw extends Component{

    constructor() {
        super();
        this.firebaseDatabase = firebaseDatabase;
        this.database = this.firebaseDatabase.ref('devID02')
        this.database.on('value', (snapshot) => {
            console.log(snapshot.val());
          });
        
          this.state = {
              arrayVal: 0,
          };        
    }
    componentDidMount() {
       this.database.on('value', (snapshot) => {
           this.setState({
               arrayVal: snapshot.val()
           });
        });
        }
          
            
    render(){
        console.log('this is the array val' + this.state.arrayVal)
            return (
                <div>

                </div>
            )
              
    }

}

