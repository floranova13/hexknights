/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { getEncryptionClass } from '../utils/hexknights';

const BlightsourceCategoryCard = ({ category }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/blightsources/${category}`);
  };

  return (
    <div
      id='blightsource-category-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <h4 className='header blightsource-category-card-content'>
        {hexknight.name}
      </h4>
      <h4 className='description blightsource-category-card-content'>
        {hexknight.description}
      </h4>
      <h4 className='subheader blightsource-category-card-content'>{`Squad: ${hexknight.squadName}`}</h4>
    </div>
  );
};

export default BlightsourceCategoryCard;
