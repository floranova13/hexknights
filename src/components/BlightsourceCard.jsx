/* eslint-disable react/prop-types */
import React from 'react';
import Text from './Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faDotCircle,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { getRarity } from '../utils/blightsources';

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
      <FontAwesomeIcon
        id='blightsource-card-icon'
        className='inline'
        size='2x'
        icon={getIcon()}
      />
      <div id='blightsource-card-content-container'>
        <h1 id='blightsource-card-name' className='subheader-left'>
          {blightsource.name}
        </h1>
        {/* <Text paragraphs={blightsource.description} classes='text' /> */}
      </div>
    </div>
  );
};

export default BlightsourceCard;
