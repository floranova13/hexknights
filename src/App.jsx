import './css/index.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HexknightsPage from './pages/HexknightsPage';
import HexknightPage from './pages/HexknightPage';
import BlightsourcesPage from './pages/BlightsourcesPage';
import BlightsourceCategoryPage from './pages/BlightsourceCategoryPage';
import BlightsourceSubcategoryPage from './pages/BlightsourceSubcategoryPage';
import FesterfontsPage from './pages/FesterfontsPage';
import BlightPage from './pages/BlightPage';
import ShroudPage from './pages/ShroudPage';
// import ChannelerPage from './pages/ChannelerPage';
// import ParagonsPage from './pages/ParagonsPage';
// import ParagonPage from './pages/ParagonPage';

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
          <Route exact path='/blight'>
            <BlightPage />
          </Route>
          <Route exact path='/shroud'>
            <ShroudPage />
          </Route>
          <Route exact path='/blightsources'>
            <BlightsourcesPage />
          </Route>
          <Route path='/blightsources/:categoryName/:subcategoryName'>
            <BlightsourceSubcategoryPage />
          </Route>
          <Route path='/blightsources/:categoryName'>
            <BlightsourceCategoryPage />
          </Route>
          <Route exact path='/festerfonts'>
            <FesterfontsPage />
          </Route>
          {/* <Route exact path='/channeler'>
            <ChannelerPage />
          </Route>
          <Route path='/paragons'>
            <ParagonsPage />
          </Route>
          <Route path='/paragons/:paragonHexalignment'>
            <ParagonPage />
          </Route> */}
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
