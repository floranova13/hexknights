/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

const FesterfontConfigurationCard = ({ festerfontConfiguration }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/festerfonts/configurations/${festerfontConfiguration}`);
  };

  const getIcon = () => {
    switch (festerfontConfiguration) {
      case 'Generic':
        return faGem;
      case 'Command':
        return faTint;
      case 'Waypoint':
        return faGem;
      case 'Infection':
        return faTint;
      case 'Invasion':
        return faGem;
      default:
        return faWind;
    }
  };

  return (
    <div
      id='festerfont-configuration-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <div className='festerfont-configuration-title-container'>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
        <h1 className='header festerfont-configuration-title'>
          {festerfontConfiguration}
        </h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
    </div>
  );
};

export default FesterfontConfigurationCard;
