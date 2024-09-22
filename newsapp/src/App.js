import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';

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
          <Route path='/business' exact element={<News key="business" catagory="business" pageSize={5} />} />
          <Route path='/entertainment' exact element={<News key="entertainment" catagory="entertainment" pageSize={5} />} />
          <Route path='/health' exact element={<News key="health" catagory="health" pageSize={5} />} />
          <Route path='/science' exact element={<News key="science" catagory="science" pageSize={5} />} />
          <Route path='/sports' exact element={<News key="sports" catagory="sports" pageSize={5} />} />
          <Route path='/technology' exact element={<News key="technology" catagory="technology" pageSize={5} />} />
          <Route path='/' exact element={<News key="general" catagory="general" pageSize={5} />} />
        </Routes>
      </Router>
    )
  }
}



