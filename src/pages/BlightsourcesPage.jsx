import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import BlightsourceCategoryCard from '../components/BlightsourceCategoryCard';
import blightsources from '../common/resources/blightsources.json';
import { getBlightsourceCategories } from '../utils/blightsources';

export default function BlightsourcesPage() {
  return (
    <Page>
      <div className='page-container'>
        <h1 className='page-title'>Blightsources</h1>
        <Text paragraphs={blightsources.description} classes='text' />
        <h1 className='header'>Blightsource Categories</h1>
        {getBlightsourceCategories().map((c, i) => {
          return <BlightsourceCategoryCard key={i} category={c} />;
        })}
      </div>
    </Page>
  );
}
