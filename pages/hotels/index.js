import React from 'react';

import { Navbar, Header } from '../../components';

const Hotels = () => {
  return (
    <div>
      <Navbar />
      <Header type='hotels' />
      <div className='hotels'>
        <div className='hotels__wrapper'>
          <div className='hotels__search'></div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
