import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Intro from './components/Intro'
import Quizzes from './components/Quizzes'

import { configStore } from "./state/store";

const { store, persistor } = configStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route path="/quizzes">
            <Quizzes />
          </Route>
          <Route path='/'>
            <Intro />
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
