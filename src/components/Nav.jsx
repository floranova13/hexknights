import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

const Nav = () => {
  return (
    <Navbar
      alignLinks='right'
      brand={
        <a className='brand-logo' href='#'>
          Logo
        </a>
      }
      id='mobile-nav'
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Link to='/'>Home</Link>
      <Link to='/hexknights'>Hexknights</Link>
    </Navbar>
  );
};

export default Nav;
