import React, { useState } from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import ParagonCard from '../components/ParagonCard';
import info from '../common/resources/generalInformation.json';
import { getParagons } from '../utils/religion';

export default function ParagonsPage() {
  const paragonsPairList = getParagons()
    .reduce((pairs, p, i) => {
      if (i % 2 === 0) {
        pairs.push([p]);
      } else {
        pairs[pairs.length - 1].push(p);
      }
      return pairs;
    }, [])
    .map((pair, i) => {
      return (
        <div className='paragon-inner-container' key={i}>
          <ParagonCard key={pair[0].name} paragon={pair[0]} />
          <ParagonCard key={pair[1].name} paragon={pair[1]} />
        </div>
      );
    });

  return (
    <Page>
      <div className='page-container paragons-page-container'>
        <h1 className='page-title'>Paragons</h1>
        <Text paragraphs={info.religion.paragonDescription}></Text>
        <div className='paragon-container'>{paragonsPairList}</div>
      </div>
    </Page>
  );
}
