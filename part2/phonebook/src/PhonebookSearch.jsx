import React, { useState } from 'react';

const PhonebookSearch = ({ persons }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const foundPerson = persons.find(person => person.name.toLowerCase() === searchTermLowerCase);
    
    if (foundPerson) {
      alert(`${searchTerm} found in the phonebook!`);
    } else {
      alert(`${searchTerm} not found in the phonebook.`);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Search</h2>
      <input value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PhonebookSearch;
