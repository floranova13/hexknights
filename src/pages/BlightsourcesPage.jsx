import React from 'react';
import Page from '../components/Page';
import BlightsourceCategoryCard from '../components/BlightsourceCategoryCard';
import { getBlightsourceCategories } from '../utils/blightsources';

export default function BlightsourcesPage() {
  return (
    <Page>
      <h1 className='page-title'>Blightsources</h1>
      {getBlightsourceCategories().map((c, i) => {
        return <BlightsourceCategoryCard key={i} category={c} />;
      })}
    </Page>
  );
}
