/* eslint-disable react/prop-types */
import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
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
  const { width } = useWindowDimensions();

  const getSelectedClass = (tabName) => {
    return tabName === tab
      ? 'short-tab text selected-tab'
      : 'short-tab text unselected-tab';
  };

  return (
    <div className='tab-container festerfont-tabs'>
      <div className='tab-inner-container'>
        <div
          className={getSelectedClass('General')}
          onClick={() => setTab('General')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faHome} />
          {width > 900 && <span>General</span>}
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Classes')}
          onClick={() => setTab('Classes')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCity} />
          {width > 900 && <span>Classes</span>}
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Saturations')}
          onClick={() => setTab('Saturations')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCubes} />
          {width > 900 && <span>Saturations</span>}
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Configurations')}
          onClick={() => setTab('Configurations')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCubes} />
          {width > 900 && <span>Configurations</span>}
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Biomes')}
          onClick={() => setTab('Biomes')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCity} />
          {width > 900 && <span>Biomes</span>}
        </div>
        <hr className='tab-interlink' />
        <div
          className={getSelectedClass('Festerfonts')}
          onClick={() => setTab('Festerfonts')}
        >
          <FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={faCubes} />
          {width > 900 && <span>Festerfonts</span>}
        </div>
        <hr className='tab-interlink' />
      </div>
    </div>
  );
};

export default FesterfontsTabs;
