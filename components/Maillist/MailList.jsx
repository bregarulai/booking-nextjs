import React from 'react';

const MailList = () => {
  return (
    <div className='mailList'>
      <h1 className='mailList__title'>Save time, save money!</h1>
      <span className='mailList__description'>
        Sign up and we'll send the best deals to you
      </span>
      <div className='mailList__input-container'>
        <input type='email' placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
