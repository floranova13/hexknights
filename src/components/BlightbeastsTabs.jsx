/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCity,
  faCodeBranch,
  faBacteria,
  faBomb,
  faChessRook,
  faCubes,
  faAddressCard,
  faHome,
  faChess,
} from '@fortawesome/free-solid-svg-icons';

const BlightbeastsTabs = ({ tab, setTab }) => {
  const getSelectedClass = (tabName) => {
    return tabName === tab
      ? 'tab text selected-tab'
      : 'tab text unselected-tab';
  };

  return (
    <div id='festerfonts-tab-container'>
      <div id='festerfonts-tab-inner-container'>
        <div
          className={getSelectedClass('Blight')}
          onClick={() => setTab('Blight')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faBacteria} />
          <span>Blight</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Festerfonts')}
          onClick={() => setTab('Festerfonts')}
        >
          <FontAwesomeIcon
            className='ml-1 mr-1'
            size='1x'
            icon={faCodeBranch}
          />
          <span>Festerfonts</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Blightbeasts')}
          onClick={() => setTab('Blightbeasts')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faChessRook} />
          <span>Blightbeasts</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Blightsources')}
          onClick={() => setTab('Blightsources')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCubes} />
          <span>Blightsources</span>
        </div>
        <hr className='tab-interlink' />
      </div>
    </div>
  );
};

export default BlightbeastsTabs;
