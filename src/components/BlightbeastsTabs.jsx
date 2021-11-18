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
      ? 'short-tab text selected-tab'
      : 'short-tab text unselected-tab';
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
          className={getSelectedClass('Threat')}
          onClick={() => setTab('Threat')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCity} />
          <span>Threat</span>
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Taxonomy')}
          onClick={() => setTab('Taxonomy')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCubes} />
          <span>Taxonomy</span>
        </div>
        <hr className='tab-interlink' />
      </div>
    </div>
  );
};

export default FesterfontsTabs;
