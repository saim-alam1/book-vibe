import React, { use } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  const { bookId, author, bookName, category, image, publisher, rating, tags, yearOfPublishing } = singleBook;

  return (

    <Link to={`./bookDetails/${bookId}`}>

      <div className="card bg-base-100 w-96 shadow-md border p-6">
        <figure className='p-4 bg-gray-200 w-2/3 mx-auto'>
          <img className='h-[166px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">

          <div className='flex justify-around mb-3'>
            {
              tags.map((tag, index) => <button key={index}>{tag}</button>)
            }
          </div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">Published : {yearOfPublishing}</div>
          </h2>
          <p>Publisher : {publisher}</p>
          <p>Author : {author}</p>
          <div className='border-t-2 border-gray-400 border-dashed'></div>
          <div className="card-actions justify-around">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline"><FaStar /> Ratings : {rating}</div>
          </div>
        </div>
      </div>

    </Link>

  );
};

export default Book;