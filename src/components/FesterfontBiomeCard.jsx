/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

const FesterfontBiomeCard = ({ festerfontBiome }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/festerfonts/biomes/${festerfontBiome}`);
  };

  const getIcon = () => {
    switch (festerfontBiome) {
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
      id='festerfont-biome-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <div className='festerfont-biome-title-container'>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
        <h1 className='header festerfont-biome-title'>{festerfontBiome}</h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
    </div>
  );
};

export default FesterfontBiomeCard;
