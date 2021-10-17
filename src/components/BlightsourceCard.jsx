/* eslint-disable react/prop-types */
import React from 'react';
import Text from './Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faDotCircle,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { getRarity, getBlightsources } from '../utils/blightsources';

const BlightsourceCard = ({ blightsource }) => {
  const getIcon = () => {
    switch (getRarity(blightsource.rarity)) {
      case 'Rare':
        return faCertificate;
      case 'Uncommon':
        return faDotCircle;
      default:
        return faCircle;
    }
  };

  return (
    <div id='blightsource-card-container'>
      <FontAwesomeIcon size='2x' icon={getIcon()} />
      <div id='blightsource-card-content-container'>
        <h1 className='subheader'>{blightsource.name}</h1>
        <Text paragraphs={blightsource.description} classes='text' />
      </div>
    </div>
  );
};

export default BlightsourceCard;
