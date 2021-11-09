import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import BlightbeastStemCard from '../components/BlightbeastStemCard';
import { useParams } from 'react-router';
import { getBlightbeastStems, getBlightbeastRoot } from '../utils/blightbeasts';

export default function BlightbeastsStemsPage() {
  const { blightbeastSeed, blightbeastRoot } = useParams();

  return (
    <Page>
      <div className='blightbeasts-stems-container'>
        <div className='blightbeasts-stems-inner-container'>
          <h1 className='page-title'>{blightbeastSeed}</h1>
          <h1 className='header'>{blightbeastRoot}</h1>
          <Text
            paragraphs={getBlightbeastRoot(blightbeastRoot).description}
            classes='text'
          />
          <h1 className='header'>Stems</h1>
          <div className='blightbeasts-stems-container'>
            {getBlightbeastStems(blightbeastSeed, blightbeastRoot).map(
              (stem, i) => {
                return (
                  <BlightbeastStemCard
                    key={i}
                    blightbeastSeed={blightbeastSeed}
                    blightbeastRoot={blightbeastRoot}
                    blightbeastStem={stem}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}
