import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredData } from '../../../Utility/addToDB';

const BookDetails = () => {

  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);
  const { bookName, image } = singleBook || {};

  const handleMarkAsRead = id => {
    addToStoredData(id);
  }

  return (
    <div className='w-2/3 mx-auto'>
      <img className='h-48' src={image} alt="" />
      <h5>Book Name : {bookName}</h5>

      <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mark As Read</button>
      <button className="btn btn-info m-2">Add To Wish List</button>

    </div>
  );
};

export default BookDetails;