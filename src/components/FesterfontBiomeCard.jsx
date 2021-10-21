/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTree,
  faSeedling,
  faWind,
  faIcicles,
  faTint,
  faWater,
} from '@fortawesome/free-solid-svg-icons';

const FesterfontBiomeCard = ({ festerfontBiome }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/festerfonts/biomes/${festerfontBiome}`);
  };

  const getIcon = () => {
    switch (festerfontBiome) {
      case 'Forest':
        return faTree;
      case 'Grassland':
        return faSeedling;
      case 'Desert':
        return faWind;
      case 'Tundra':
        return faIcicles;
      case 'Freshwater':
        return faTint;
      default:
        return faWater;
    }
  };

  return (
    <div
      className='festerfont-biome-card-container'
      onClick={() => handleClick()}
    >
      <div className='festerfont-biome-title-container'>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
        <h1 className='header festerfont-biome-name'>{festerfontBiome}</h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
    </div>
  );
};

export default FesterfontBiomeCard;
