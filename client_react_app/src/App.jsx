import React, { Component } from 'react';
//import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './app/components/Home';
import Demo from './app/components/Demo';
import Updates from './app/components/Updates';
import Login from './app/components/Login';
import Navbar from './app/components/CustomNavbar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: false,
    }
  }

  render() {
    return (
      <Router>
          <div>
              <Navbar authenticated={this.state.authenticated}/>
              <Route exact path = "/" component={Home} />
              <Route path = "/demo" component={Demo} />
              <Route path = "/Updates" component={Updates} />
              <Route path = "/Login" component={Login} />
              </div>
      </Router>
    );
  }
}

export default App;
