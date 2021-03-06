import React, { Component } from "react";
import firebase, { auth, provider } from "../../containers/firebase.js";

import {UserContext} from "../../contexts/UserContext";;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {                      
      currentItem: "",
      username: "",
      carYear: "",
      carMake: "",
      carModel: "",
      city: "",
      state: "",
      items: [],
      id: "",
      user: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({user});   
    });
  }
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase
      .database()
      .ref("users")
      .child(this.state.user.uid);
    const item = {
      title: this.state.currentItem,
      user: this.state.user.uid,
      carYear: this.state.carYear,
      carMake: this.state.carMake,
      carModel: this.state.carModel
    };
   
    itemsRef.set(item);
    this.setState({
      id: {
        currentItem: "",
        username: "",
        carYear: "",
        carMake: "",
        carModel: ""
      }
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
       this.setState({user});
      }
    });
    const itemsRef = firebase.database().ref("users");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
          carYear: items[item].carYear,
          carMake: items[item].carYear,
          carModel: items[item].carYear
        });
      }
      this.setState({
        users: newState
      });
    });
  }

  render() {
    console.log(this.props.user)
    return (
      <div className="login">
        <header>
          <div className="wrapper">
            <h1> {this.props.user} </h1>
            <h1>Car</h1>
            <h1>hello </h1>
        
          
            {this.state.user ? (
              <button onClick={this.logout}>Logout</button>
            ) : (
                  <button onClick={this.login}>Log In</button>
                )}
          </div>
        </header>
        {this.state.user ? (
          <div>
            <div className="user-profile">
              <img src={this.state.user.photoURL}  alt="login" />
            </div>
            <div className="container">
              <section className="add-item">
                <form onSubmit={this.handleSubmit}>
                  <ul className="list-unstyled">
                    <li hidden>
                      <h1>{this.state.user.id}</h1>
                      dispatch(addToDo(input.value))
                      <input
                        type="text"
                        name="username"
                        placeholder={this.state.user.uid}
                        onChange={this.handleChange}
                        value={this.state.user.id}
                      />
                    </li>
                    <li>
                      <h2>Device ID</h2>
                      <input
                        type="text"
                        name="currentItem"
                        placeholder="DevID"
                        onChange={this.handleChange}
                        value={this.state.currentItem}
                      />
                    </li>
                    <li>
                      <h2>Car Year</h2>
                      <input
                        type="text"
                        name="carYear"
                        placeholder="Year"
                        onChange={this.handleChange}
                        value={this.state.carYear}
                      />
                    </li>
                    <li>
                      <h2>Model</h2>
                      <input
                        type="text"
                        name="carModel"
                        placeholder="Model"
                        onChange={this.handleChange}
                        value={this.state.carModel}
                      />
                    </li>
                    <li>
                      <h2>Make</h2>
                      <input
                        type="text"
                        name="carMake"
                        placeholder="Make"
                        onChange={this.handleChange}
                        value={this.state.carMake}
                      />
                    </li>
                    <br />
                    <button>Submit</button>
                  </ul>
                </form>
              </section>
              <section className="display-item">
                <div className="wrapper">
                  <ul>
                    {this.state.items.map(item => {
                      return (
                        <li key={item.id}>
                          <h3>{item.title}</h3>
                          <p>
                            brought by: {item.user}
                            {item.user === this.state.user.displayName ||
                            item.user === this.state.user.email ? (
                              <button onClick={() => this.removeItem(item.id)}>
                                Remove Item
                              </button>
                            ) : null}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <p>Car information</p>
        )}
      </div>
    );
  }
}

export default Login;