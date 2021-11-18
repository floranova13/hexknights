import React from 'react';
import Text from './Text';
import BlightbeastSeedCard from './BlightbeastSeedCard';
import beasts from '../common/resources/blightbeasts.json';

export default function BlightbeastsTaxonomy() {
  return (
    <div className='blightbeasts-taxonomy-container'>
      <div className='blightbeasts-taxonomy-inner-container'>
        <h1 className='page-title'>Blightbeast Taxonomy</h1>
        <Text
          paragraphs={beasts.information.taxonomy.description}
          classes='text'
        />
        <h1 className='header'>Seeds</h1>
        <div className='blightbeasts-taxonomy-seeds-container'>
          <BlightbeastSeedCard blightbeastSeed='Arth' />
          <BlightbeastSeedCard blightbeastSeed='Botan' />
          <BlightbeastSeedCard blightbeastSeed='Chorth' />
        </div>
      </div>
    </div>
  );
}
