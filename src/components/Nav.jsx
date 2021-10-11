import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='nav-container'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/hexknights'>
        Hexknights
      </Link>
    </div>
  );
};

export default Nav;
