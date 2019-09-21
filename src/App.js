import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form />
        <Button>ima button</Button>
      </div>
    );
  }
}

export default App;
