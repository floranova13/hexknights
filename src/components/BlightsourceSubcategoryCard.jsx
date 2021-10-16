/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { getEncryptionClass } from '../utils/hexknights';

const BlightsourceSubcategoryCard = ({ category, subcategory }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/blightsources/${category}/${subcategory}`);
  };

  return (
    <div
      id='blightsource-subcategory-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <h4 className='header blightsource-subcategory-card-content'>
        {hexknight.name}
      </h4>
      <h4 className='description blightsource-subcategory-card-content'>
        {hexknight.description}
      </h4>
      <h4 className='subheader blightsource-subcategory-card-content'>{`Squad: ${hexknight.squadName}`}</h4>
    </div>
  );
};

export default BlightsourceSubcategoryCard;
