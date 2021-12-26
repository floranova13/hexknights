import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Text from '../components/Text';
import GlossaryTerm from '../components/GlossaryTerm';
import NavButton from '../components/NavButton';
import glossary from '../common/resources/glossary.json';
import { getTerms, filterTerms } from '../utils/glossary';
import '../css/variables.css';

const GlossaryTermContainer = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

const GlossarySearchMainContainer = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2em;
`;

const GlossarySearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlossarySearchInputLabel = styled.span`
  text-align: center;
  font-size: 2em;
  font-weight: 900;
  margin-right: 0.25em;
`;

const GlossarySearch = styled.input`
  color: var(--primary-lightest);
  text-align: center;
  border: 0.25em solid var(--primary-lighter);
  border-radius: 9px;
  background-color: var(--primary-darkest);
  align-self: flex-end;
  margin-right: 0.25em;
  width: 12em;
  height: 2.25em;
`;

const ClearButton = styled.button`
  color: white;
  font-weight: 600;
  text-align: center;
  border: 0.25em solid var(--primary-lighter);
  border-radius: 9px;
  background-color: var(--primary-darkest);
  align-self: flex-end;
  margin-right: 2em;
  width: 12em;
  height: 2.25em;

  &:hover {
    color: var(--primary-lighter);
    cursor: pointer;
  }

  &:active {
    background-color: var(--primary-darker);
  }
`;

const GlossarySearchButton = styled.button`
  color: var(--primary-lightest);
  font-weight: 600;
  text-align: center;
  border: 0.25em solid var(--primary-lighter);
  border-radius: 9px;
  background-color: ${(props) =>
    props.isDescriptionSearch ? 'rgba(21, 6, 58, 1)' : 'rgba(21, 6, 58, 0.15)'};
  align-self: flex-end;
  margin-right: 2em;
  width: 8em;
  height: 2.25em;

  &:hover {
    color: var(--primary-lighter);
    cursor: pointer;
  }

  &:active {
    background-color: var(--primary-darker);
  }
`;

const GlossaryPage = () => {
  const [searchString, setSearchString] = useState('');
  const [isDescriptionSearch, setIsDescriptionSearch] = useState(false);
  // const [terms, setTerms] = useState(getTerms());
  const [filteredTerms, setFilteredTerms] = useState([]);
  // const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    setFilteredTerms(filterTerms(searchString, isDescriptionSearch));
  }, [searchString, isDescriptionSearch]);

  // useEffect(() => {
  //   if()
  // }, [selectedId]);

  const handleClick = (term) => {
    setSearchString(term.name);
  };

  return (
    <Page>
      <div className='page-container glossary-page-container'>
        <h1 className='page-title'>Glossary</h1>
        <Text classes='mt-2 mb-3 text' paragraphs={glossary.description}></Text>
        <GlossarySearchMainContainer>
          <GlossarySearchInputContainer>
            <GlossarySearchInputLabel>Search</GlossarySearchInputLabel>
            <GlossarySearch
              type='text'
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
          </GlossarySearchInputContainer>
          <GlossarySearchButton
            isDescriptionSearch={isDescriptionSearch}
            onClick={() => setIsDescriptionSearch(!isDescriptionSearch)}
          >
            Search All
          </GlossarySearchButton>
        </GlossarySearchMainContainer>
        <GlossaryTermContainer className='glossary-term-container'>
          {filteredTerms.map((term, i) => (
            <GlossaryTerm key={i} term={term} clickHandler={handleClick} />
          ))}
        </GlossaryTermContainer>
      </div>
    </Page>
  );
};

export default GlossaryPage;
