import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <sppan className='navbar__logo'>BregaCode Booking</sppan>
        <div className='navbar__items'>
          <button className='navbar__button'>Register</button>
          <button className='navbar__button'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
