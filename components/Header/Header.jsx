import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCar,
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
      </div>
    </div>
  );
};

export default Header;
