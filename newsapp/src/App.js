import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import About from './components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar title="News Today" mode="dark" aboutText='About'/>
        <Routes>
          <Route path='/about' exact element={
              <About />
          }
          />

          <Route path='/' exact element={
             <News/>
          }
          />
        </Routes>
      </Router>
    )
  }
}

