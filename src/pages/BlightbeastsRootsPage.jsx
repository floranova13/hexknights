import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import BlightbeastRootCard from '../components/BlightbeastRootCard';
import NavButton from '../components/NavButton';
import { useParams } from 'react-router';
import { getBlightbeastRoots, getBlightbeastSeed } from '../utils/blightbeasts';

export default function BlightbeastsRootsPage() {
  const { blightbeastSeed } = useParams();

  return (
    <Page>
      <NavButton pageString='/blightbeasts' />
      <div className='blightbeasts-roots-outer-container page-container'>
        <div className='blightbeasts-roots-inner-container'>
          <h1 className='page-title'>{blightbeastSeed}</h1>
          <Text
            paragraphs={getBlightbeastSeed(blightbeastSeed).description}
            classes='text'
          />
          <h1 className='header'>Roots</h1>
          <div className='blightbeasts-roots-container'>
            {getBlightbeastRoots(blightbeastSeed).map((root, i) => {
              return (
                <BlightbeastRootCard
                  key={i}
                  blightbeastSeed={blightbeastSeed}
                  blightbeastRoot={root}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
