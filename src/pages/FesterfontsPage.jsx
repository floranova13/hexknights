import React from 'react';
import Page from '../components/Page';
import FesterfontClassCard from '../components/FesterfontClassCard';
import { getBlightsourceCategories } from '../utils/blightsources';

export default function BlightsourcesPage() {
  return (
    <Page>
      <h1 className='page-title'>Festerfonts</h1>
      {getBlightsourceCategories().map((c, i) => {
        return <FesterfontClassCard key={i} class={c} />;
      })}
    </Page>
  );
}
