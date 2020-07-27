import React from 'react';
import logo from './logo.svg';
import { Auth } from './features/auth/Auth';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SignIn</h1>
        <Auth />
      </header>
    </div>
  );
}

export default App;
