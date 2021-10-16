import React, { useEffect, useState } from 'react';
import Page from '../components/Page';

const HomePage = () => {
  useEffect(() => {});

  return (
    <Page>
      <h1>48th Generation Knights of Shroud</h1>
      <div>
        <h1 className='subheader subheader-left'>The Covenant of Shade:</h1>
        <p className='text'>
          The only acceptable faith in the Shrouded Theocracy. All others are
          divined to be the work of the Strangers, and purged with extreme
          prejudice.
        </p>
        <p className='text'>
          The followers of the Covenant of Shade are called &quot;The
          Shaden&quot; or &quot;Shaden&quot;. However, within the territory of
          the Shrouded Theocracy, people are assumed to be Shaden, or targets
          for &quot;enforcement&quot;.
        </p>
        <h1 className='subheader subheader-left'>Channeler:</h1>
        <p className='text'>
          The Channeler is the single highest authority in The Shrouded
          Theocracy.
        </p>
        <h1 className='subheader subheader-left'>Paragons:</h1>
        <p className='text'>
          The Paragons the Shrouded Theocracy&apos;s governers. Every Paragon
          has a specialty, an aspect of Shroud that they a responsible for
          maintaining. Each one also commands six Hexknights.
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
