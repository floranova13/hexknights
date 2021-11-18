import React, { useState } from 'react';
import Page from '../components/Page';
import ParagonCard from '../components/ParagonCard';
import { getParagons } from '../utils/religion';

export default function ParagonsPage() {
  const paragonsList = getParagons().map((p, i) => {
    return <ParagonCard key={i} paragon={p} />;
  });

  return (
    <Page>
      <div className='page-container'>
        <h1 className='page-title'>Paragons</h1>
        <div>{paragonsList}</div>
      </div>
    </Page>
  );
}
