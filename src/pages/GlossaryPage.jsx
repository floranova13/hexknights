import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Text from '../components/Text';
import GlossaryTerm from '../components/GlossaryTerm';
import glossary from '../common/resources/glossary.json';
import { getTerms, filterTerms } from '../utils/glossary';

const GlossaryPage = () => {
  const [searchString, setSearchString] = useState('');
  const [isDescriptionSearch, setIsDescriptionSearch] = useState(false);
  const [terms, setTerms] = useState(getTerms());
  const [filteredTerms, setFilteredTerms] = useState([]);

  useEffect(() => {
    console.log('Glossary Page loaded');

    setFilteredTerms(filterTerms(searchString, isDescriptionSearch));

    console.log('---flitered---');
    console.log(filteredTerms);
    console.log(terms);
  }, []);

  const GlossaryTermContainer = styled.div`
    @media screen and (max-width: 600px) {
      font-size: 8px;
    }
  `;

  return (
    <Page>
      <h1>Hello</h1>
      {/* <div className='page-container glossary-page-container'>
        <h1 className='page-title'>Glossary</h1>
        <Text classes='mt-2 mb-3 text' paragraphs={glossary.description}></Text>
        <GlossaryTermContainer className='glossary-term-container'>
          {filteredTerms.map((term, i) => (
            <GlossaryTerm key={i} term={term} />
          ))}
        </GlossaryTermContainer>
      </div> */}
    </Page>
  );
};

export default GlossaryPage;
