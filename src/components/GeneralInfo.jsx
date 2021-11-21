/* eslint-disable react/prop-types */
import React from 'react';
import Text from './Text';
import info from '../common/resources/generalInformation.json';

const GeneralInfo = () => {
  return (
    <div className='general-info-container'>
      <h1 className='page-title'>Wayward Faction Archive</h1>
      <h1 className='header'>{info.general.missionName}</h1>
      <h1 className='subheader subheader-left'>Mission Statement:</h1>
      <Text paragraphs={info.general.missionStatement} classes='description' />
      <h1 className='subheader subheader-left'>Mission Description:</h1>
      <Text paragraphs={info.general.missionDescription} classes='text' />
    </div>
  );
};

export default GeneralInfo;
