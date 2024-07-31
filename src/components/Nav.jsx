import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul className='list'>
      <li className='lists'><Link to="/Home">Home</Link></li>
       <li className='lists'><Link to="/gallery">Gallery</Link></li>
      <li className='lists'><Link to="/about">About</Link></li>
    </ul>
    
  </nav>
);

export default Nav;