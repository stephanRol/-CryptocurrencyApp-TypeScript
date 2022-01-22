import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="app">
      <h2>HOLISS</h2>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  )
};

export default App

