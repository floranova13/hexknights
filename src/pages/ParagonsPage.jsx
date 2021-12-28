import React, { useState } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Text from '../components/Text';
import ParagonCard from '../components/ParagonCard';
import info from '../common/resources/generalInformation.json';
import { getParagons } from '../utils/religion';
import useWindowDimensions from '../hooks/useWindowDimensions';

const ParagonContainer = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

export default function ParagonsPage() {
  const { width } = useWindowDimensions();

  const paragonsPairList = getParagons()
    .reduce((groups, p, i) => {
      let groupCount = 1;
      if (width > 1024) {
        groupCount = 3;
      } else if (width > 720) {
        groupCount = 2;
      }

      if (i % groupCount === 0) {
        groups.push([p]);
      } else {
        groups[groups.length - 1].push(p);
      }
      return groups;
    }, [])
    .map((group, i) => {
      console.log(group);
      return (
        <div className='paragon-inner-container' key={i}>
          {group.map((g) => (
            <ParagonCard key={g.name} paragon={g} />
          ))}
        </div>
      );
    });

  return (
    <Page>
      <div className='page-container paragons-page-container'>
        <h1 className='page-title'>Paragons</h1>
        <Text
          classes='mt-2 mb-3 text'
          paragraphs={info.religion.paragonDescription}
        ></Text>
        <div className='paragon-container'>{paragonsPairList}</div>
      </div>
    </Page>
  );
}
