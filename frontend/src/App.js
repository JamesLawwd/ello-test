import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import SearchBar from './components/SearchBar';

import './App.css';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [readingList, setReadingList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLevel, setSearchLevel] = useState('');

  const handleAddToReadingList = (book) => {
    if (!readingList.some(item => item.title === book.title)) {
      setReadingList([...readingList, book]);
    }
  };

  const handleRemoveFromReadingList = (bookToRemove) => {
    setReadingList(readingList.filter(book => book.title !== bookToRemove.title));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleLevelSearch = (level) => {
    setSearchLevel(level);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    book.readingLevel.toLowerCase().includes(searchLevel.toLowerCase())
  );

  const booksByLevel = filteredBooks.reduce((acc, book) => {
    (acc[book.readingLevel] = acc[book.readingLevel] || []).push(book);
    return acc;
  }, {});

  return (
    <div className="App">
      <h1>Books List</h1>
      <SearchBar onSearch={handleSearch} onLevelSearch={handleLevelSearch} />
      {Object.keys(booksByLevel).map(level => (
        <div key={level} className="level-container">
          <h2>Level {level}</h2>
          <BookList books={booksByLevel[level]} onAdd={handleAddToReadingList} />
        </div>
      ))}
      <h2>Reading List</h2>
      <ReadingList readingList={readingList} onRemove={handleRemoveFromReadingList} />
    </div>
  );
}

export default App;
