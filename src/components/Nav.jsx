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
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import settings from '../common/resources/novelSettings.json';
import ReactTooltip from 'react-tooltip';

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
    <div className='nav-container'>
      <div className='nav-link-container'>
        <FontAwesomeIcon className='ml-1 mr-1' size='2x' icon={faHome} />
        {/* <CogIcon className='icon ml-2' /> */}
        <Link className='nav-link text' to='/'>
          Home
        </Link>
        <FontAwesomeIcon className='ml-1 mr-1' size='2x' icon={faCity} />
        {/* <CubeTransparentIcon className='icon' /> */}
        <Link className='nav-link text' to='/shroud'>
          Shroud
        </Link>
        <FontAwesomeIcon className='ml-1 mr-1' size='2x' icon={faBacteria} />
        <Link className='nav-link text' to='/blight'>
          Blight
        </Link>
      </div>
      <div className='chapter-selection-container'>
        <div>
          <FontAwesomeIcon
            className='ml-1 mr-1'
            size='1x'
            icon={faInfoCircle}
            data-tip='chapter-number-info'
          />
        </div>
        <input
          className='chapter-selection-input'
          type='text'
          value={chapter}
          onChange={(e) => setChapter(filterText(e.target.value))}
        />
        <AdjustmentsIcon className='icon' />
      </div>
      <ReactTooltip
        className='z-front'
        multiline
        data-place='bottom'
        data-padding='15px 15px'
      >
        Enter the chapter number you have read through at the top right of the{' '}
        <br />
        page to ensure you will not spoil the story for yourself. Information{' '}
        <br />
        about characters that have not been introduced yet will be <br />
        unreadable.You will be unable to enter a chapter that has not been{' '}
        <br />
        released yet.
      </ReactTooltip>
    </div>
  );
};

export default Nav;
