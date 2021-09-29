import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StrictMode} from 'react';
import Login from './pages/Login';

function App() {
  return (
    <StrictMode>
        Bienvenidos
        <Login/>
    </StrictMode>
 
  );
}

export default App;
