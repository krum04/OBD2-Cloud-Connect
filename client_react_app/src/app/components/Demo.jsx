import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../styles/Demo.css';
import Gage from './DataGauge';
import Trend from './LineGraph';
import Block from './BlockGauge';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            userID: 'dog'
        }
    }
    onChangeDevID() {
        this.props.changeDevId(this.state.userID);  
    }
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12}>
                            <div id="profile-banner">
                                <div id='driver-info' className='inline-block'>
                                    <h2>Andrew Krum</h2>
                                    <h1>2010 VW GTI</h1>
                                </div>
                                <div className='imagecropper' >
                                    <img id="profile" src="https://cdcssl.ibsrv.net/autodata/images/?IMG=USC80VWC232A021005_2.jpg" alt="vw_gti" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="show-grid text-center">
                        <Col xs={2} sm={3} >
                            <Gage devID={'devID01'} keyVal={'SPEED'} name={'KPH'} minVal={0} maxVal={140} />
                        </Col>
                        <Col xs={3} sm={3} >
                            <   Gage devId={'devID01'} keyVal={'RPM'} name={'RPM'} minVal={0} maxVal={8000} />
                        </Col>
                        <Col xs={3} sm={3} >
                            <   Gage devId={'devID01'} keyVal={'INTAKE_TEMP'} name={'Intake Temp'} minVal={0} maxVal={200} />
                        </Col>
                        <Col xs={3} sm={3} >
                            <   Gage devId={'devID01'} keyVal={'INTAKE_TEMP'} name={'Intake Temp'} minVal={0} maxVal={200} />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={4} >
                            <Trend devId={'devID01'} keyVal={'INTAKE_TEMP'} nameVal={'Intake Temp'} />
                        </Col>
                        <Col xs={12} sm={4} >
                            <Trend devId={'devID01'} keyVal={'SPEED'} nameVal={'Intake Temp'} />
                        </Col>
                        <Col xs={12} sm={4} >
                            <Trend devId={'devID01'} keyVal={'RPM'} nameVal={'Intake Temp'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                            <Block devId={'devID01'} keyVal={'INTAKE_TEMP'} fieldName={'Intake Temp'} />
                        </Col>
                        <Col xs={12} sm={4}>
                            <Block devId={'devID01'} keyVal={'SPEED'} fieldName={'Speed'} />
                        </Col>
                        <Col xs={12} sm={4}>
                            <Block devId={'devID01'} keyVal={'RPM'} fieldName={'RPM'} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    };
}
