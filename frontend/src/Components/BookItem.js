import React from 'react';
import './BookItem.css';

const BookItem = ({ book, onAdd }) => {
  const { title, author, coverPhotoURL, readingLevel } = book;

  return (
    <div className="book-item">
      <img src={coverPhotoURL} alt={`${title} cover`} className="book-cover" />
      <h2>{title}</h2>
      <p>by {author}</p>
      <p>Reading Level: {readingLevel}</p>
      <button className="add-to-list" onClick={() => onAdd(book)}>Add to List</button>
    </div>
  );
};

export default BookItem;
