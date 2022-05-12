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
import { useRouter } from 'next/router';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const router = useRouter();

  const handleOption = (option, operation) => {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [option]:
          operation === 'inc' ? options[option] + 1 : options[option] - 1,
      };
    });
  };

  const handleSearch = () => {
    router.push(
      {
        pathname: '/hotels',
        query: {
          destination,
          endDate: format(date[0].endDate, 'MM/dd/yyyy'),
          startDate: format(date[0].startDate, 'MM/dd/yyyy'),
          adult: options.adult,
          children: options.children,
          room: options.room,
        },
      }
      // '/hotels'
    );
  };

  return (
    <div className='header'>
      <div
        className={
          type === 'hotels'
            ? 'header__container header__container--hotels'
            : 'header__container'
        }
      >
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
        {type !== 'hotels' && (
          <>
            <h1 className='header__title'>
              A lifetime of discounts? It's Genius.
            </h1>
            <p className='header__description'>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className='header__button'>Sign in / Register</button>
            <div className='header__search'>
              <div className='header__search-item'>
                <FontAwesomeIcon icon={faBed} className='header__icon' />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='header__input'
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className='header__search-item'>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className='header__icon'
                />
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
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='header__date'
                  />
                )}
              </div>
              <div className='header__search-item'>
                <FontAwesomeIcon icon={faPerson} className='header__icon' />
                <span
                  className='header__search-text'
                  onClick={() => setShowOptions(!showOptions)}
                >
                  {`${options.adult} adults · ${options.children} children · ${options.room} room`}
                </span>
                {showOptions && (
                  <div className='header__options'>
                    <div className='header__options-item'>
                      <span className='header__option-text'>Adult</span>
                      <div className='header__counter-container'>
                        <button
                          disabled={options.adult <= 1}
                          className='header__option-button'
                          onClick={() => handleOption('adult', 'dec')}
                        >
                          -
                        </button>
                        <span className='header__option-counter'>
                          {options.adult}
                        </span>
                        <button
                          className='header__option-button'
                          onClick={() => handleOption('adult', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='header__options-item'>
                      <span className='header__option-text'>Children</span>
                      <div className='header__counter-container'>
                        <button
                          disabled={options.children <= 0}
                          className='header__option-button'
                          onClick={() => handleOption('children', 'dec')}
                        >
                          -
                        </button>
                        <span className='header__option-counter'>
                          {options.children}
                        </span>
                        <button
                          className='header__option-button'
                          onClick={() => handleOption('children', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='header__options-item'>
                      <span className='header__option-text'>Room</span>
                      <div className='header__counter-container'>
                        <button
                          disabled={options.room <= 1}
                          className='header__option-button'
                          onClick={() => handleOption('room', 'dec')}
                        >
                          -
                        </button>
                        <span className='header__option-counter'>
                          {options.room}
                        </span>
                        <button
                          className='header__option-button'
                          onClick={() => handleOption('room', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='header__search-item'>
                <button className='header__button' onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
