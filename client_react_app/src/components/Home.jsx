import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';




export default class Home extends   Component{

    render(){
        return(
            <div>

            <Jumbotron>
                <div>
                    <h2>Your car, now on the cloud!</h2>
                    <p>Leveraging your onboard diagnostisc with the power of the cloud!</p>
                    <Link to="/demo">
                    <Button bsStyle="primary">View the Live Demo!</Button>
                    </Link>
                </div>
            </Jumbotron>
            
            </div>
        )
    }
}