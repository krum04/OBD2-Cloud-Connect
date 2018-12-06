import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Component } from "react";
import App from './app/containers/App';


const MyContext = React.createContext();
export default class MyProvider extends Component {
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

ReactDOM.render(  
    <MyProvider>
        <App />
    </MyProvider>,
    document.getElementById('root')    
);

