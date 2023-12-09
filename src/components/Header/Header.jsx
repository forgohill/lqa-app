import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__supertitle'>
        lab.quick.action
      </Link>
      <h1 className='header__title'>
        <Link to='/' className='header__link'>
          Александр Белов /&nbsp;@forgohill&nbsp;/ @marlo
        </Link>
      </h1>
    </header >
  );
}

export default Header;
