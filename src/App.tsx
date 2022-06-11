import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Home } from './features/home/Home';
import { Splash } from './features/splash/Splash';
import { Authorization } from './features/auth/Authorization';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Authorization /> */}
      {/* <Splash /> */}
      <Home />
      </header>
    </div>
  );
}

export default App;
