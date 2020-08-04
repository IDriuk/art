import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Auth } from './features/auth/Auth';
import { Vocabulary } from './features/vocabulary/Vocabulary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/vocabulary">
              <Vocabulary />
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
