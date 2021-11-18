/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getEncryptionClass } from '../utils/hexknights';

const BackButton = ({ pageString }) => {
  return (
    <Link className='back-button' to={pageString}>
      Back
    </Link>
  );
};

export default BackButton;
