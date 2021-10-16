import React from 'react';
import Page from '../components/Page';
import BlightsourceCategory from '../components/BlightsourceCategory';
import { getBlightsourceCategories } from '../utils/blightsources';

export default function HexknightsPage() {
  console.log(getHexknights());
  return (
    <Page>
      <h1 className='page-title'>Hexknights</h1>
      {getBlightsourceCategories.map((c) => {
        return;
        <BlightsourceCategory
          category={c}
          toggleExpansion={setJudgementToggle}
        />;
      })}
    </Page>
  );
}
