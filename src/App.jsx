import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HexknightsPage from './pages/HexknightsPage';
import HexknightPage from './pages/HexknightPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/hexknights'>Hexknights</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/hexknights/:id'>
              <HexknightPage />
            </Route>
            <Route exact path='/hexknights'>
              <HexknightsPage />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
