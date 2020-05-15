import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { About } from './components/About';
import { Login } from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <About />
        <Login />
      </div>      
    );
  }
}

export default App;
