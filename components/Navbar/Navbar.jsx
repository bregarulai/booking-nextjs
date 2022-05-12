import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <Link href='/'>
          <span className='navbar__logo'>BregaBooking</span>
        </Link>
        <div className='navbar__items'>
          <button className='navbar__button'>Register</button>
          <button className='navbar__button'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
