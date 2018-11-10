import React, { Component } from 'react';
//import firebase, { auth, provider } from './firebase.js';
import { firebase } from "firebase";


export default class Login extends Component {
  
  login(){
    var txtEmail = document.getElementById('txtEmail');
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnSignUp = document.getElementById('btnSignUp');
    var btnLogout = document.getElementById('btnLogout');
    const auth = firebase.auth();
    
    // login event

    if (btnLogin != null){
    btnLogin.addEventListener('click', e => {
      // get email and pass
      var email = txtEmail.value;
      var pass = txtPassword.value;
      const auth  = firebase.auth();
      // sign in
      var promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(function (e) {
         return console.log(e.message);
      });
    });
  }
  if (btnSignUp != null){
  // add signup event. the signup button sends user email and pass to firebase
  btnSignUp.addEventListener('click', function (e) {
  // get email and pass
  // TODO: validate email - check it is real
  var email = txtEmail.value;
  var pass = txtPassword.value;
  const auth  = firebase.auth();   
  var user = firebase.auth().currentUser;

  // create user and sign in
  var promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.then(function(user) {
  user.sendEmailVerification().then(function() {
  // Email sent.
  }, function(error) {
  // An error happened.
  });
  }); 
  });} // end sign up button event listener


  // realtime authentication listener
  firebase.auth().onAuthStateChanged(function (firebaseUser) {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
      btnSignUp.classList.add('hide');
      btnLogin.classList.add('hide');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
      btnSignUp.classList.remove('hide');
      btnLogin.classList.remove('hide');
      } // end else statement
  }); // end function

  };
      
  render () {
      this.login()
      
    return (
      <div>
          <input id='txtEmail' type="email" placeholder="Email"/>
          <input id='txtPassword' type="password" placeholder="Password"/>
          <button id="btnLogin" class="btn btn-action">Login</button>
          <button id="btnSignUp" class="btn btn-action">SignUp</button>
          <button id="btnLogout" class="btn btn-action">Logout</button>
      </div>

    )
  }
}