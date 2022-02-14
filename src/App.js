import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch, Route,
} from 'react-router-dom';

import { initializeShips } from './reducers/ships';
import Ships from './components/Ships';
import Ship from './components/Ship';
import NavBar from './components/NavBar';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeShips())
  }, [dispatch]);

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/ship/:id">
          <Ship />
        </Route>
        <Route path="/">
          <Ships />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
