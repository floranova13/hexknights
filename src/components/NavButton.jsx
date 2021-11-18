/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ pageString, label }) => {
  return (
    <Link className='back-button' to={pageString}>
      {label || 'Back'}
    </Link>
  );
};

export default NavButton;
