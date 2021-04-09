import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";
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
            <Title>Welcome to Test day at Kilo Health</Title>
            <Link to="/quizzes/0">Start The Quiz</Link>
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

const Title = styled.h1`
  margin-top: 15rem;
  text-align: center;
`;

export default App;
