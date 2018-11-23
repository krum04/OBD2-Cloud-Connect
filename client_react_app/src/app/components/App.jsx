import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Demo from './Demo';
import Updates from './Updates';
import Login from './Login';
import Navbar from './CustomNavbar';

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
