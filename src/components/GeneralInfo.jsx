/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Text from './Text';
import info from '../common/resources/generalInformation.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBalanceScaleLeft,
  faBalanceScaleRight,
} from '@fortawesome/free-solid-svg-icons';

const GeneralInfo = () => {
  const [isLeft, toggleScale] = useState(true);
  let history = useHistory();

  const handleClick = () => {
    history.push('/teetering-scales');
  };
  const toggleScalePos = () => toggleScale(!isLeft);
  const getScalePos = () => (isLeft ? faBalanceScaleLeft : faBalanceScaleRight);

  useEffect(() => {
    const scaleInterval = setInterval(toggleScalePos, 3000);

    return () => clearInterval(scaleInterval);
  });

  return (
    <div className='general-info-container'>
      <h1 className='page-title'>Wayward Faction Archive</h1>
      <h1 className='header'>{info.general.missionName}</h1>
      <h1 className='subheader subheader-left'>Mission Statement:</h1>
      <Text paragraphs={info.general.missionStatement} classes='description' />
      <h1 className='subheader subheader-left'>Mission Description:</h1>
      <Text paragraphs={info.general.missionDescription} classes='text' />
      <FontAwesomeIcon
        className='ml-1 mr-1 scales-icon'
        size='xs'
        icon={getScalePos()}
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default GeneralInfo;
