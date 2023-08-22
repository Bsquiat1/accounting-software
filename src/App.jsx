import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';




import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar'
import Accoun







const store = configureStore({
  reducer: {
    
  },
});

const App = () => {
  
  


  return (
    
      <Provider store={store}>
      <Router>
        <div className="App">
        
        <Navbar  />
       
       
          
          
          <Routes>
            <Route path="/" element={<Home />} />
            


          </Routes>
        </div>
        
      </Router>
    </Provider>
    
    
    
  );
};

export default App;
