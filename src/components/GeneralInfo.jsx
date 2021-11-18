/* eslint-disable react/prop-types */
import React from 'react';
import info from '../common/resources/generalInformation.json';

const GeneralInfo = () => {
  return (
    <div className='general-info-container'>
      <h1 className='page-title'>Wayward Faction Archive</h1>
      <h1 className='header'>{info.general.missionName}</h1>
      <h1 className='subheader subheader-left'>Mission Statement:</h1>
      <p className='text'>{info.general.missionStatement}</p>
      <h1 className='subheader subheader-left'>Mission Description:</h1>
      <p className='text'>{info.general.missionDescription}</p>
    </div>
  );
};

export default GeneralInfo;
