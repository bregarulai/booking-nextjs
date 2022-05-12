import React from 'react';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
        alt='search item'
        className='searchItem__img'
      />
      <div className='searchItem__description'>
        <h1 className='searchItem__title'>Tower Street Apartments</h1>
        <span className='searchItem__distance'>500m from center</span>
        <span className='searchItem__tax-i-op'>Free airport taxi</span>
        <span className='searchItem__subtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='searchItem__features'>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className='searchItem__cancel-op'>Free cancellation </span>
        <span className='searchItem__cancel-op-subtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='searchItem__details'>
        <div className='searchItem__rating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='searchItem__detail-texts'>
          <span className='searchItem__price'>$109</span>
          <span className='searchItem__tax-op'>Includes taxes and fees</span>
          <button className='searchItem__check-button'>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
