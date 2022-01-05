import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Text from '../components/Text';
import GlossaryTerm from '../components/GlossaryTerm';
import Icon from '../components/Icon';
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

const GlossarySearchButton = styled.button`
  color: var(--primary-lightest);
  font-weight: 600;
  text-align: center;
  border: 0.25em solid var(--primary-lighter);
  border-radius: 9px;
  background-color: ${(props) =>
    props.isDescriptionSearch ? 'rgba(21, 6, 58, 1)' : 'rgba(21, 6, 58, 0.15)'};
  align-self: flex-end;
  margin-right: 0.2em;
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

const GlossaryMultiSearchButton = styled(GlossarySearchButton)`
  width: 2.35em;
  background-color: ${(props) =>
    props.isMultiSearch ? 'rgba(21, 6, 58, 1)' : 'rgba(21, 6, 58, 0.15)'};
`;

const ClearButton2 = styled(GlossarySearchButton)`
  display: absolute;
  width: 2.35em;
  border: none;
  color: white;
  margin-left: -2em;
  background: none;

  &:hover {
    color: var(--primary-lighter);
    cursor: pointer;
  }
`;

const ClearButton = styled.div`
  display: absolute;
  width: 2.35em;
  height: 1em;
  border: none;
  color: white;
  margin-left: -2.5em;

  &:hover {
    color: var(--primary-lighter);
    cursor: pointer;
  }
`;

const GlossaryPage = () => {
  const [searchString, setSearchString] = useState('');
  const [isDescriptionSearch, setIsDescriptionSearch] = useState(false);
  const [isMultiSearch, setIsMultiSearch] = useState(false);
  // const [terms, setTerms] = useState(getTerms());
  const [filteredTerms, setFilteredTerms] = useState([]);
  // const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    setFilteredTerms(
      filterTerms(searchString, isDescriptionSearch, isMultiSearch)
    );
  }, [searchString, isDescriptionSearch, isMultiSearch]);

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
          <ClearButton onClick={() => setSearchString('')}>
            <Icon iconLabel={'clear'} />
          </ClearButton>
          <GlossarySearchButton
            isDescriptionSearch={isDescriptionSearch}
            onClick={() => setIsDescriptionSearch(!isDescriptionSearch)}
          >
            Search All
          </GlossarySearchButton>
          <GlossaryMultiSearchButton
            isMultiSearch={isMultiSearch}
            onClick={() => setIsMultiSearch(!isMultiSearch)}
          >
            <Icon iconLabel={'multi-search'} />
          </GlossaryMultiSearchButton>
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
