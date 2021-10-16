import './css/index.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import HexknightsPage from './pages/HexknightsPage';
import HexknightPage from './pages/HexknightPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route path='/hexknights/:knightName'>
            <HexknightPage />
          </Route>
          <Route exact path='/hexknights'>
            <HexknightsPage />
          </Route>
          <Route exact path='/blightsources'>
            <HexknightsPage />
          </Route>
          <Route path='/hexknights/:category'>
            <HexknightsPage />
          </Route>
          <Route exact path='/hexknights/:category/:subcategory'>
            <HexknightsPage />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
