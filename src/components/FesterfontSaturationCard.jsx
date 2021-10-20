/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

const FesterfontSaturationCard = ({ festerfontSaturation }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/festerfonts/saturations/${festerfontSaturation}`);
  };

  const getIcon = () => {
    switch (festerfontSaturation) {
      case 'Placid':
        return faGem;
      case 'Rippling':
        return faTint;
      default:
        return faWind;
    }
  };

  return (
    <div
      id='festerfont-saturation-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <div className='festerfont-saturation-title-container'>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
        <h1 className='header festerfont-saturation-title'>
          {festerfontSaturation}
        </h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
    </div>
  );
};

export default FesterfontSaturationCard;
