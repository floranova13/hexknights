/* eslint-disable react/prop-types */
import React from 'react';
import Text from './Text';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGem,
  faTint,
  faWind,
  faLeaf,
  faViruses,
  faDiceD20,
} from '@fortawesome/free-solid-svg-icons';

const BlightsourceCategoryCard = ({ category }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/blightsources/${category.category}`);
  };

  const getIcon = () => {
    switch (category.category) {
      case 'Blightstones':
        return faGem;
      case 'Blightichors':
        return faTint;
      case 'Blightfumes':
        return faWind;
      case 'Blightflora':
        return faLeaf;
      case 'Blightfungi':
        return faViruses;
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
        <h1 className='header blightsource-category-card-content'>
          {category.category}
        </h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
      <Text
        paragraphs={category.description}
        classes='text blightsource-category-card-content'
      />
    </div>
  );
};

export default BlightsourceCategoryCard;
