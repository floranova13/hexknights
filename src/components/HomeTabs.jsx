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

const HomeTabs = ({ tab, setTab }) => {
  const getSelectedClass = (tabName) => {
    return tabName === tab
      ? 'tab text selected-tab'
      : 'tab text unselected-tab';
  };

  return (
    <div id='tab-container'>
      <div id='tab-inner-container'>
        <div
          className={getSelectedClass('General')}
          onClick={() => setTab('General')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faHome} />
          <span>General</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Hexknights')}
          onClick={() => setTab('Hexknights')}
        >
          <FontAwesomeIcon
            className='ml-1 mr-1'
            size='1x'
            icon={faAddressCard}
          />
          <span>Hexknights</span>
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

export default HomeTabs;
