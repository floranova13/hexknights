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
          className={getSelectedClass('Shroud')}
          onClick={() => setTab('Shroud')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCity} />
          <span>Shroud</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Blight')}
          onClick={() => setTab('Blight')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faBacteria} />
          <span>Blight</span>
        </div>
        <hr className='tab-interlink' />
      </div>
    </div>
  );
};

export default HomeTabs;
