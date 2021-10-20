/* eslint-disable react/prop-types */
import React from 'react';
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

const FesterfontsTabs = ({ tab, setTab }) => {
  const getSelectedClass = (tabName) => {
    return tabName === tab
      ? 'tab text selected-tab'
      : 'tab text unselected-tab';
  };

  return (
    <div className='tab-container'>
      <div className='tab-inner-container'>
        <div
          className={getSelectedClass('General')}
          onClick={() => setTab('General')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faHome} />
          <span>General</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Classes')}
          onClick={() => setTab('Classes')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCity} />
          <span>Classes</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Saturations')}
          onClick={() => setTab('Saturations')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCubes} />
          <span>Saturations</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Biomes')}
          onClick={() => setTab('Biomes')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCity} />
          <span>Biomes</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Festerfonts')}
          onClick={() => setTab('Festerfonts')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCubes} />
          <span>Festerfonts</span>
        </div>
        <hr className='tab-interlink' />
      </div>
    </div>
  );
};

export default FesterfontsTabs;
