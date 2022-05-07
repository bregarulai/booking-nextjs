import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__list'>
          <div className='header__item header__item--active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='header__item'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='header__item'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className='header__item'>
            <FontAwesomeIcon icon={faBed} />
            <span>Acttractions</span>
          </div>
          <div className='header__item'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className='header__title'>
          {' '}
          A lifetime of discounts? It's Genius.
        </h1>
        <p className='header__description'>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className='header__button'>Sign in / Register</button>
        <div className='header__search'>
          <div className='header__search-item'>
            <FontAwesomeIcon icon={faBed} className='header__icon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='header__input'
            />
          </div>
          <div className='header__search-item'>
            <FontAwesomeIcon icon={faCalendarDays} className='header__icon' />
            <span className='header__search-text'>
              Checkin Date to Checkout Date
            </span>
          </div>
          <div className='header__search-item'>
            <FontAwesomeIcon icon={faPerson} className='header__icon' />
            <span className='header__search-text'>
              2 adults 2 children 1 room
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
