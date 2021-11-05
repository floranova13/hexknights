import React from 'react';
import Text from './Text';
import BlightbeastRootCard from './BlightbeastRootCard';
import beasts from '../common/resources/blightbeasts.json';
import { useParams } from 'react-router';

export default function BlightbeastsTaxonomy() {
  const { blightbeastSeed } = useParams();

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
          <BlightbeastRootCard
            blightbeastSeed={blightbeastSeed}
            blightbeastRoot=''
          />
        </div>
      </div>
    </div>
  );
}
