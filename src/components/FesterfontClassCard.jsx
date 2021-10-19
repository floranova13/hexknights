/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

const FesterfontClassCard = ({ festerfontClass }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/festerfonts/${festerfontClass.name}`);
  };

  const getIcon = () => {
    switch (festerfontClass.name) {
      case 'Clarion':
        return faGem;
      case 'Umbra':
        return faTint;
      default:
        return faDiceD20;
    }
  };

  return (
    <div
      id='blightsource-category-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <div className='blightsource-category-title-container'>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
        <h1 className='header blightsource-category-title'>
          {festerfontClass.name}
        </h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
    </div>
  );
};

export default FesterfontClassCard;
