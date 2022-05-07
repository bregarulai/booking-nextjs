import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const Header = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
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
            <span
              className='header__search-text'
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyyy'
              )}`}
            </span>
            {showCalendar && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='header__date'
              />
            )}
          </div>
          <div className='header__search-item'>
            <FontAwesomeIcon icon={faPerson} className='header__icon' />
            <span className='header__search-text'>
              2 adults 2 children 1 room
            </span>
          </div>
          <div className='header__search-item'>
            <button className='header__button'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
