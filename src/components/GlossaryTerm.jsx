/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import '../css/variables.css';
import { getTerms, filterTerms } from '../utils/glossary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const TermContainer = styled.div`
  @media screen and (max-width: 1200px) {
    font-size: 8px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 10px;
  }

  min-height: 5em;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const TermTitle = styled.span`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }

  /* width: 300px; */
  width: 25%;
  font-size: 3em;
  font-weight: 900;
  flex-shrink: 0;
`;

const TermDescription = styled.p`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }

  text-align: left;
  font-size: 1.5em;
  font-weight: 400;
`;

const GlossaryTerm = ({ term, clickHandler }) => {
  // const handleClick = () => {

  // };

  // const getIcon = () => {
  //   switch (festerfontClass) {
  //     case 'Clarion':
  //       return faGenderless;
  //     case 'Umbra':
  //       return faCircleNotch;
  //     default:
  //       return faAdjust;
  //   }
  // };

  return (
    <TermContainer className='glossary-term' onClick={() => clickHandler(term)}>
      <FontAwesomeIcon
        className='festerfont-class-icon mr-1'
        size='2x'
        icon={faBook}
      />
      <TermTitle className='text-left'>{term.name}</TermTitle>
      <TermDescription>{term.description}</TermDescription>
    </TermContainer>
  );
};

export default GlossaryTerm;
