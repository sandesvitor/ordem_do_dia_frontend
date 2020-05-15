import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Recursos } from './components/Recursos';
import { Login } from './components/Login';
import { Rodape } from './components/Rodape'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Recursos />
        <Login />
        <Rodape />
      </div>      
    );
  }
}

export default App;
