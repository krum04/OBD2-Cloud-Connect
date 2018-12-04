import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from "react-redux";
import Home from '../components/Home';
import Demo from '../components/Demo';
import Updates from '../components/Updates';
import Login from '../components/Login';
import Navbar from '../components/CustomNavbar';
import { setUserID } from "../actions";


const MyContext = React.createContext();
class MyProvider extends Component {
  state  ={
    userID: 12345
  }
  render(){
    return(
      <MyContext.Provider value = "USER ID COMING SOON">
        {this.props.children}
      </MyContext.Provider>

    )
  }
}
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
