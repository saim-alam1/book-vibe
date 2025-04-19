import React from 'react';
import bookImage from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className='flex justify-between items-center p-16 w-full mx-auto'>
      <div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
        <button className='btn btn-primary'>View The List</button>
      </div>
      <div>
        <img className='w-3/12' src={bookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;