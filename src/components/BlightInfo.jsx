/* eslint-disable react/prop-types */
import React from 'react';
import blight from '../common/resources/blight.json';

const BlightInfo = () => {
  return (
    <div className='blightsources-info-container'>
      <h1 className='page-title'>Blight</h1>
      <h1 className='header header-left'>Blight Phenomena:</h1>
      <p className='text'>{blight.blightDescription}</p>
      <h1 className='subheader subheader-left'>Festerfonts:</h1>
      <p className='text'>{blight.festerfontsIntro}</p>
      <h1 className='subheader subheader-left'>Blightbeasts:</h1>
      <p className='text'>{blight.blightbeastsIntro}</p>
      <h1 className='subheader subheader-left'>Blightsources:</h1>
      <p className='text'>{blight.blightsourcesIntro}</p>
    </div>
  );
};

export default BlightInfo;
