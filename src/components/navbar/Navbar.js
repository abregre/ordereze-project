import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Pages Management</h1>
      </Link>
      <ul className='navbar'>
        <li className='nav-link'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-link'>
          <Link to='/add'>Add page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
