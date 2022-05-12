import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

import { Navbar, Header, SearchItem } from '../../components';

const Hotels = () => {
  const router = useRouter();
  const { query } = router;
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(query.destination);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: query.adult,
    children: query.children,
    room: query.room,
  });

  useEffect(() => {
    if (router.isReady) {
      setDestination(query.destination);
      setDate([
        {
          startDate: new Date(query.startDate),
          endDate: new Date(query.endDate),
          key: 'selection',
        },
      ]);

      setOptions({
        adult: query.adult,
        children: query.children,
        room: query.room,
      });
    }
  }, [router.isReady]);
  return (
    <div>
      <Navbar />
      <Header type='hotels' />
      <div className='hotels'>
        <div className='hotels__wrapper'>
          <div className='hotels__search'>
            <h1 className='hotels__title'>Search</h1>
            <div className='hotels__search-item'>
              <label htmlFor=''>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className='hotels__search-item'>
              <label htmlFor=''>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div>
            <div className='hotels__search-item'>
              <label htmlFor=''>Options</label>
              <div className='hotels__search-options'>
                <div className='hotels__search-options-item'>
                  <span className='hotels__search-options-text'>
                    Min Price <small> per night</small>
                  </span>
                  <input
                    type='number'
                    className='hotels__search-options-input'
                  />
                </div>
                <div className='hotels__search-options-item'>
                  <span className='hotels__search-options-text'>
                    Max Price <small> per night</small>
                  </span>
                  <input
                    type='number'
                    className='hotels__search-options-input'
                  />
                </div>
                <div className='hotels__search-options-item'>
                  <span className='hotels__search-options-text'>Adult</span>
                  <input
                    type='number'
                    min={1}
                    className='hotels__search-options-input'
                    placeholder={options.adult}
                  />
                </div>
                <div className='hotels__search-options-item'>
                  <span className='hotels__search-options-text'>Children</span>
                  <input
                    type='number'
                    min={0}
                    className='hotels__search-options-input'
                    placeholder={options.children}
                  />
                </div>
                <div className='hotels__search-options-item'>
                  <span className='hotels__search-options-text'>Room</span>
                  <input
                    type='number'
                    min={1}
                    className='hotels__search-options-input'
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='hotels__result'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
