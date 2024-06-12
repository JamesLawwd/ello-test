import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onLevelSearch }) => {
  const [term, setTerm] = useState('');
  const [level, setLevel] = useState('');

  const handleTitleChange = (event) => {
    setTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
    onLevelSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={term}
        onChange={handleTitleChange}
        placeholder="Search books by title..."
      />
      <input
        type="text"
        value={level}
        onChange={handleLevelChange}
        placeholder="Search books by level..."
      />
    </div>
  );
};

export default SearchBar;
