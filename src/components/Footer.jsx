import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div id='footer-container'>
      <div id='footer-link-container'>
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
      <div id='note-container'>
        <p id='footer-note' className='ml-2 mr-2'>
          Enter the chapter number you have read through at the top right of the
          page to ensure you will not spoil the story for yourself. Information
          about characters that have not been introduced yet will be unreadable.
          You will be unable to enter a chapter that has not been released yet.
        </p>
      </div>
    </div>
  );
};

export default Nav;
