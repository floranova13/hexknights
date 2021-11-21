/* eslint-disable react/prop-types */
import React from 'react';
import Text from './Text';
import info from '../common/resources/generalInformation.json';

const ShroudInfo = () => {
  return (
    <div className='shroud-info-container'>
      <h1 className='page-title'>Shroud</h1>
      <h1 className='header header-left'>The Covenant of Shade:</h1>
      <Text paragraphs={info.religion.general} classes='text' />
      <h1 className='subheader subheader-left'>Channeler:</h1>
      <Text paragraphs={info.religion.channeler.description} classes='text' />
      <h1 className='subheader subheader-left'>Paragons:</h1>
      <Text paragraphs={info.religion.paragonDescription} classes='text' />
      <h1 className='subheader subheader-left'>Hexaline Knights:</h1>
      <Text paragraphs={info.religion.hexknights} classes='text' />
    </div>
  );
};

export default ShroudInfo;
