import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

const BookList = ({ books, onAdd }) => {
  return (
    <div className="books-container">
      {books.map((book) => (
        <BookItem key={book.title} book={book} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default BookList;
