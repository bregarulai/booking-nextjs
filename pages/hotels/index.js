import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

import { Navbar, Header } from '../../components';

const Hotels = () => {
  const router = useRouter();
  const { query } = router;
  // const data = JSON.parse(router.query.data);
  console.log('query data', query);
  const [destination, setDestination] = useState(query.destination);
  const [date, setDate] = useState([
    {
      startDate: new Date(query.startDate),
      endDate: new Date(query.endDate),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: query.adult,
    children: query.children,
    room: query.room,
  });
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
              <span
              // className='header__search-text'
              // onClick={() => setShowCalendar(!showCalendar)}
              >
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}
              </span>
            </div>
          </div>
          <div className='hotels__result'></div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
