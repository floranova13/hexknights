import './css/index.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HexknightsPage from './pages/HexknightsPage';
import HexknightPage from './pages/HexknightPage';
import BlightsourcesPage from './pages/BlightsourcesPage';
import BlightsourceCategoryPage from './pages/BlightsourceCategoryPage';
import BlightsourceSubcategoryPage from './pages/BlightsourceSubcategoryPage';
import FesterfontsPage from './pages/FesterfontsPage';
import BlightbeastsPage from './pages/BlightbeastsPage';
import BlightbeastsRootsPage from './pages/BlightbeastsRootsPage';
import BlightbeastsStemsPage from './pages/BlightbeastsStemsPage';
import BlightbeastsStemPage from './pages/BlightbeastsStemPage';
import FesterfontClassPage from './pages/FesterfontClassPage';
import FesterfontBiomePage from './pages/FesterfontBiomePage';
import FesterfontConfigurationPage from './pages/FesterfontConfigurationPage';
import FesterfontSaturationPage from './pages/FesterfontSaturationPage';
import BlightPage from './pages/BlightPage';
import ShroudPage from './pages/ShroudPage';
import ChannelerPage from './pages/ChannelerPage';
import ParagonsPage from './pages/ParagonsPage';
import ParagonPage from './pages/ParagonPage';
import TeeteringScalesPage from './pages/TeeteringScalesPage';
import GlossaryPage from './pages/GlossaryPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='glossary' element={<GlossaryPage />} />
          <Route path='/teetering-scales' element={<TeeteringScalesPage />} />
          <Route path='/hexknights/:knightName' element={<HexknightPage />} />
          <Route path='/hexknights' element={<HexknightsPage />} />
          <Route path='/blight' element={<BlightPage />} />
          <Route path='/shroud' element={<ShroudPage />} />
          <Route path='/blightsources' element={<BlightsourcesPage />} />
          <Route
            path='/blightsources/:categoryName/:subcategoryName'
            element={<BlightsourceSubcategoryPage />}
          />
          <Route
            path='/blightsources/:categoryName'
            element={<BlightsourceCategoryPage />}
          />
          <Route
            path='/festerfonts/classes/:festerfontClassName'
            element={<FesterfontClassPage />}
          />
          <Route
            path='/festerfonts/saturations/:saturationName'
            element={<FesterfontSaturationPage />}
          />
          <Route
            path='/festerfonts/configurations/:configurationName'
            element={<FesterfontConfigurationPage />}
          />
          <Route
            path='/festerfonts/biomes/:biomeName'
            element={<FesterfontBiomePage />}
          />
          <Route
            path='/festerfonts/zone/:festerfontName'
            element={<FesterfontsPage />}
          />
          <Route path='/festerfonts' element={<FesterfontsPage />}>
            <Route
              path='festerfonts/:activeTab'
              element={<FesterfontsPage />}
            />
          </Route>
          <Route path='/blightbeasts' element={<BlightbeastsPage />}>
            <Route
              path='/blightbeasts/:activeTab'
              component={<BlightbeastsPage />}
            />
          </Route>
          <Route
            path='/blightbeasts/taxonomy/:blightbeastSeed/:blightbeastRoot/:blightbeastStem'
            element={<BlightbeastsStemPage />}
          />
          <Route
            path='/blightbeasts/taxonomy/:blightbeastSeed/:blightbeastRoot'
            element={<BlightbeastsStemsPage />}
          />
          <Route
            path='/blightbeasts/taxonomy/:blightbeastSeed'
            element={<BlightbeastsRootsPage />}
          />
          <Route path='/channeler' element={<ChannelerPage />} />
          <Route path='/paragons' element={<ParagonsPage />} />
          <Route
            path='/paragons/:paragonHexalignment'
            element={<ParagonPage />}
          />
          <Route exact path='/' element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
