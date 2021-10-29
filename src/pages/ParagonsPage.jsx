import React from 'react';
import Page from '../components/Page';
import ParagonCard from '../components/ParagonCard';
import { getParagon } from '../utils/religion';

export default function ParagonsPage() {
  return (
    <Page>
      <h1 className='page-title'>Paragons</h1>
      <ParagonCard key={1} paragon={getParagon('Judgement')} />
      <ParagonCard key={2} paragon={getParagon('Mercy')} />
      <ParagonCard key={3} paragon={getParagon('Progress')} />
      <ParagonCard key={4} paragon={getParagon('Expedition')} />
      <ParagonCard key={5} paragon={getParagon('Resilience')} />
      <ParagonCard key={6} paragon={getParagon('Sacrifice')} />
    </Page>
  );
}
