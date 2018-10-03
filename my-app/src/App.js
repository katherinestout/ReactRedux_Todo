import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import {connect} from 'react-redux';
//import {Provider} from 'react-redux';

import './App.css';

import Center from './components/Center';

class App extends Component {
  render() {
    return (
     
      <Router>
      <div className="App">
        <Route exact path="/" component ={Center}/>
      </div>
      </Router>
      
    );
  }
}

export default App;
