import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AdjustmentsIcon,
  CogIcon,
  CubeTransparentIcon,
} from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faCity,
  faCodeBranch,
  faBacteria,
  faBomb,
  faChessRook,
  faCubes,
  faAddressCard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import settings from '../common/resources/novelSettings.json';

const Nav = () => {
  const history = useHistory();
  const [chapter, setChapter] = useState(90);

  useEffect(() => {
    localStorage.setItem('chapter', chapter);
    console.log('Chapter: ' + localStorage.getItem('chapter'));
    history.push('/');
  }, [chapter]);

  const filterText = (s) => {
    const parsed = parseInt(s, 10);

    return isNaN(parsed) ? 1 : Math.min(Math.max(parsed, 1), settings.chapters);
  };

  return (
    <div id='nav-container'>
      <div id='nav-link-container'>
        <FontAwesomeIcon className='ml-1 mr-1' size='2x' icon={faHome} />
        {/* <CogIcon className='icon ml-2' /> */}
        <Link className='nav-link text' to='/'>
          Home
        </Link>
        <FontAwesomeIcon className='ml-1 mr-1' size='2x' icon={faCity} />
        {/* <CubeTransparentIcon className='icon' /> */}
        <Link className='nav-link text' to='/hexknights'>
          Shroud
        </Link>
        <FontAwesomeIcon className='ml-1 mr-1' size='2x' icon={faCubes} />
        <Link className='nav-link text' to='/blightsources'>
          Blightsources
        </Link>
      </div>
      <div id='chapter-selection-container'>
        <input
          id='chapter-selection-input'
          type='text'
          value={chapter}
          onChange={(e) => setChapter(filterText(e.target.value))}
        />
        <AdjustmentsIcon className='icon' />
      </div>
    </div>
  );
};

export default Nav;
