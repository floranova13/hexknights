import React from 'react';
import Text from './Text';
import beasts from '../common/resources/blightbeasts.json';
import blight from '../common/resources/blight.json';

export default function BlightbeastsGeneral() {
  return (
    <div className='blightbeasts-general-container'>
      <div className='blightbeasts-general-inner-container'>
        <h1 className='page-title'>Blightbeasts</h1>
        <Text paragraphs={blight.blightbeastsIntro} classes='text' />
        <Text paragraphs={beasts.information.description} classes='text' />
        <h1 className='page-title'>Blightbeasts</h1>
        <Text paragraphs={blight.blightseedsIntro} classes='text' />
      </div>
    </div>
  );
}
