import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Auth } from './features/auth/Auth';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/about">
              <Auth />
            </Route>
            <Route path="/users">
              <Auth />
            </Route>
            <Route path="/">
              <Auth />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
