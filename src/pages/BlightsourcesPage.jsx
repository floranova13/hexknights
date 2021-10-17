import React from 'react';
import Page from '../components/Page';
import BlightsourceCategoryCard from '../components/BlightsourceCategoryCard';
import { getBlightsourceCategories } from '../utils/blightsources';

export default function HexknightsPage() {
  console.log(getHexknights());
  return (
    <Page>
      <h1 className='page-title'>Hexknights</h1>
      {getBlightsourceCategories.map((c, i) => {
        return <BlightsourceCategoryCard key={i} category={c} />;
      })}
    </Page>
  );
}
