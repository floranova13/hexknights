import React from 'react';
import Text from './Text';
import beasts from '../common/resources/blightbeasts.json';
import blight from '../common/resources/blight.json';

export default function BlightbeastsTaxonomy() {
  return (
    <div className='blightbeasts-taxonomy-container'>
      <div className='blightbeasts-taxonomy-inner-container'>
        <h1 className='page-title'>Blightbeast Taxonomy</h1>
        <Text paragraphs={blight.blightbeastsIntro} classes='text' />
        <Text paragraphs={beasts.information.description} classes='text' />
        <h1 className='header'>Blightbeasts</h1>
        <Text paragraphs={blight.blightseedsIntro} classes='text' />
      </div>
    </div>
  );
}
