import React, { useEffect, useState } from 'react';
import Page from '../components/Page';

const HomePage = () => {
  useEffect(() => {});

  return (
    <Page>
      <h1>48th Generation Knights of Shroud</h1>
      <div>
        <h1 className='subheader subheader-left'>Hexaline Knights:</h1>
        <p className='text'>
          The Hexaline Knights, also known as Hexknights, are the Shrouded
          Theocracy&apos;s might. Every Hexknight commands a squad of six
          knights.
        </p>
        <h1 className='subheader subheader-left'>Hexaline Knights:</h1>
        <p className='text'>
          The Hexaline Knights, also known as Hexknights, are the Shrouded
          Theocracy&apos;s might. Every Hexknight commands a squad of six
          knights.
        </p>
      </div>
      <div>
        <h1 className='subheader subheader-left'>Note:</h1>
        <p className='description'>
          Enter the chapter number you have read through at the top right of the
          page to ensure you will not spoil the story for yourself. Information
          about characters that have not been introduced yet will be unreadable.
          You will be unable to enter a chapter that has not been released yet.
        </p>
      </div>
    </Page>
  );
};

export default HomePage;
