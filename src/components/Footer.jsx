import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className='footer-container'>
      <div className='footer-link-container'>
        <FontAwesomeIcon className='ml-1 mr-1' size='2x' icon={faBook} />
        <a
          className='footer-link text'
          href='https://www.royalroad.com/fiction/28380/blightbane'
          target='_blank'
          rel='noreferrer'
        >
          Web Novel
        </a>
      </div>
      <div className='note-container'>
        <p className='ml-2 mr-2 w-100 footer-note'>
          This link leads to the web novel on which this website is based. It is
          a rough draft.
        </p>
      </div>
      <FontAwesomeIcon
        className='mr-1 top-page-arrow'
        size='2x'
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        icon={faArrowCircleUp}
      />
    </div>
  );
};

export default Nav;
