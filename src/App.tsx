import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, Exchanges, Cryptodetails, News } from './components';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/crypto/:coinId" element={<Cryptodetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptholic <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
};

export default App

