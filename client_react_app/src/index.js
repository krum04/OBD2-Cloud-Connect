import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Component } from "react";
import App from './app/containers/App';
import {UserProvider, UserContext} from "./app/contexts/UserContext";

ReactDOM.render (  
    <UserProvider>
      <UserContext.Consumer>
        {({user}) => <App user={user} /> }
      </UserContext.Consumer>
    </UserProvider>,
    document.getElementById('root')    
);