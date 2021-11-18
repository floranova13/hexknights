import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import NavButton from '../components/NavButton';
import { useParams } from 'react-router';
import { getBlightbeastStem } from '../utils/blightbeasts';

export default function BlightbeastsStemPage() {
  const { blightbeastSeed, blightbeastRoot, blightbeastStem } = useParams();
  const [stem, setStem] = useState(getBlightbeastStem('TitarcheStem1'));

  useEffect(() => {
    setStem(getBlightbeastStem(blightbeastStem));
  });

  return (
    <Page>
      <div className='back-button-flex'>
        <NavButton
          pageString={`/blightbeasts/taxonomy/${blightbeastSeed}/${blightbeastRoot}`}
        />
        <NavButton
          className='top-2'
          pageString='/blightbeasts'
          label='Blightbeasts'
        />
      </div>
      <div className='blightbeasts-stem-page-container page-container'>
        <div className='blightbeasts-stem-page-inner-container'>
          <h1 className='page-title'>{blightbeastSeed}</h1>
          <h1 className='header'>{blightbeastRoot}</h1>
          <h1 className='subheader'>{blightbeastStem}</h1>
          <Text paragraphs={stem.description} classes='text' />
        </div>
      </div>
    </Page>
  );
}
