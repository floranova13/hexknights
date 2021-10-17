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
      id='blightsource-subcategory-card-container'
      className=''
      onClick={() => handleClick()}
    >
      <h1 className='header'>{subcategory.subcategory}</h1>
      <h1 className='header'>{subcategory.category}</h1>
      <Text paragraphs={subcategory.description} classes='text' />
    </div>
  );
};

export default BlightsourceSubcategoryCard;
