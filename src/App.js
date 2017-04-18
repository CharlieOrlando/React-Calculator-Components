import React, { Component } from 'react';
import './App.css';
import Display from './components/display';
import Keys from './components/keys';
import Title from './components/title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
        <Title />
        <Display />
        <Keys />


            </div>
          </div>
    );
  }
}

export default App;
