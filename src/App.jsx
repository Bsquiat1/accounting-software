import './App.css'
import CounterComponent from './components/Counter'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
// import userReducer from './reducers/userReducer'; //

function App() {
  const [count, setCount] = useState(0)

  return ( <Provider store={store}>
    <Router>
      <div className="App">
      
      <Navbar onLogout={handleLogout} username={user ? user.username : ''} />
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminReg />} />
          <Route path="/consumer" element={<ConsumerReg />} />
        </Routes>
      </div>
      
    </Router>
  </Provider>
  
);
};


export default App
