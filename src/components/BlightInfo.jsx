/* eslint-disable react/prop-types */
import React from 'react';
import Text from './Text';
import blight from '../common/resources/blight.json';

const BlightInfo = () => {
  return (
    <div className='blightsources-info-container'>
      <h1 className='page-title'>Blight</h1>
      <h1 className='header header-left'>Blight Phenomena:</h1>
      <Text paragraphs={blight.blightIntro} classes='text' />
      <Text paragraphs={blight.blightDescription} classes='text' />
      <h1 className='subheader subheader-left'>Festerfonts:</h1>
      <Text paragraphs={blight.festerfontsIntro} classes='text' />
      <h1 className='subheader subheader-left'>Blightbeasts:</h1>
      <Text paragraphs={blight.blightbeastsIntro} classes='text' />
      <h1 className='subheader subheader-left'>Blightsources:</h1>
      <Text paragraphs={blight.blightsourcesIntro} classes='text' />
    </div>
  );
};

export default BlightInfo;
