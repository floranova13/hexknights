import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AdjustmentsIcon,
  CogIcon,
  CubeTransparentIcon,
} from '@heroicons/react/solid';
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
        <CogIcon className='icon ml-2' />
        <Link className='nav-link text' to='/'>
          Home
        </Link>
        <CubeTransparentIcon className='icon' />
        <Link className='nav-link text' to='/hexknights'>
          Hexknights
        </Link>
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
