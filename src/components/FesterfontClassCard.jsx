/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

const FesterfontClassCard = ({ festerfontClass }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/festerfonts/classes/${festerfontClass}`);
  };

  const getIcon = () => {
    switch (festerfontClass) {
      case 'Clarion':
        return faGem;
      case 'Umbra':
        return faTint;
      default:
        return faWind;
    }
  };

  return (
    <div
      id='festerfont-class-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <div className='festerfont-class-title-container'>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
        <h1 className='header festerfont-class-title'>{festerfontClass}</h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
    </div>
  );
};

export default FesterfontClassCard;
