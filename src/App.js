import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" apiKey="aaabd4d50e6c4703a39cc2bc54d202e5"  pageSize={8} country="us" category="general" />} />
            <Route exact path="/entertainment" element={<News key = "entertainment" apiKey="aaabd4d50e6c4703a39cc2bc54d202e5"  pageSize={8} country="us" category="entertainment" />} />
            <Route exact path="/business" element={<News key="business"  apiKey="aaabd4d50e6c4703a39cc2bc54d202e5" pageSize={8} country="us" category="business" />} />
            <Route exact path="/health" element={<News key="health"  apiKey="aaabd4d50e6c4703a39cc2bc54d202e5" pageSize={8} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" apiKey="xaaabd4d50e6c4703a39cc2bc54d202e5yz"  pageSize={8} country="us" category="science" />} />
            <Route exact path="/sports" element={<News  key="sports" apiKey="aaabd4d50e6c4703a39cc2bc54d202e5" pageSize={8} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News  key="technology" apiKey="aaabd4d50e6c4703a39cc2bc54d202e5" pageSize={8} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
