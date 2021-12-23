/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import '../css/variables.css';
import { getTerms, filterTerms } from '../utils/glossary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const GlossaryTerm = ({ term }) => {
  const TermContainer = styled.div`
    @media screen and (max-width: 600px) {
      font-size: 8px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const TermTitle = styled.span`
    @media screen and (max-width: 600px) {
      font-size: 8px;
    }

    font-size: 3em;
    font-weight: 900;
    flex-grow: 3;
  `;

  const TermDescription = styled.span`
    @media screen and (max-width: 600px) {
      font-size: 8px;
    }

    font-size: 3em;
    font-weight: 900;
    flex-grow: 9;
  `;
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
    <TermContainer className='glossary-term'>
      <FontAwesomeIcon
        className='festerfont-class-icon fg-1'
        size='2x'
        icon={faBook}
      />
      <TermTitle>{term.name}</TermTitle>
      <TermDescription>{term.description}</TermDescription>
    </TermContainer>
  );
};

export default GlossaryTerm;
