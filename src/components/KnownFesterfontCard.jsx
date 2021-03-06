/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

const KnownFesterfontCard = ({ festerfont }) => {
  let history = useNavigate();

  const handleClick = () => {
    history(`/festerfonts/${festerfont}`);
  };

  const getIcon = () => {
    switch (festerfont.biome) {
      case 'Forest':
        return faGem;
      case 'Grassland':
        return faTint;
      case 'Desert':
        return faGem;
      case 'Tundra':
        return faTint;
      case 'Freshwater':
        return faGem;
      default:
        return faWind;
    }
  };

  return (
    <div
      id='known-festerfont-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <div className='known-festerfont-title-container'>
        <FontAwesomeIcon
          className='known-festerfont-icon'
          size='2x'
          icon={getIcon()}
        />
        <h1 className='header known-festerfont-title'>{festerfont.name}</h1>
        <FontAwesomeIcon
          className='known-festerfont-icon'
          size='2x'
          icon={getIcon()}
        />
      </div>
    </div>
  );
};

export default KnownFesterfontCard;
