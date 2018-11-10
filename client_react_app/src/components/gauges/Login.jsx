import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null // <-- add this line
    }
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  handleChange(e) {
    /* ... */
  }
  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
      
  render () {
    return(
      <div className='app'>
      <header>
        <div className="wrapper">
          <h1>OBD Cloud Connect</h1>
          {this.state.user ?
            <button onClick={this.logout}>Logout</button>                
            :
            <button onClick={this.login}>Log In</button>              
          }
        </div>
      </header>
      {this.state.user ?
        <div>
          <div className='user-profile'>
            <img src={this.state.user.photoURL} />
            <h1>{this.state.user.displayName}</h1>
          </div>
        </div>
        :
        <div className='wrapper'>
          <p>Please Login</p>
        </div>
      }
    </div>
    )  
  }
}