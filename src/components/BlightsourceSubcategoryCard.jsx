/* eslint-disable react/prop-types */
import React from 'react';
import Text from './Text';
import { useHistory } from 'react-router-dom';
import { getEncryptionClass } from '../utils/hexknights';

const BlightsourceSubcategoryCard = ({ subcategory }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(
      `/blightsources/${subcategory.category}/${subcategory.subcategory}`
    );
  };

  return (
    <div
      className='blightsource-subcategory-card-container'
      onClick={() => handleClick()}
    >
      <h1 className='subheader blightsource-subcategory-title'>
        {subcategory.subcategory}
      </h1>
    </div>
  );
};

export default BlightsourceSubcategoryCard;
