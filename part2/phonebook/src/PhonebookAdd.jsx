import React, { useState } from 'react';

const PhonebookAdd = ({ onSubmit }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  // preventdefault() solved some weird errors
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newName, newNumber);
    setNewName('');
    setNewNumber('');
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add</h2>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} /> 
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PhonebookAdd;
