import React, { useState } from 'react';
import PhonebookSearch from './PhonebookSearch';
import PhonebookAdd from './PhonebookAdd';
import PhonebookNumbers from './PhonebookNumbers';

// populates the people's section with some dummy data
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'jonas brothers', number: '12312323' },
    { name: 'joe ma', number: '456'},
    { name: 'sug ma', number: '789'}
  ]);

  // checking for duplicates, similar functionality to search
  const addPerson = (newName, newNumber) => {
    const nameExists = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());

    if (nameExists) {
      alert(`${newName} is already added to the phonebook.`);
      return;
    }

    // copies an array of persons with the spread method
    // adds the input at the end of the array
    const newPersons = [...persons, { name: newName, number: newNumber }];
    setPersons(newPersons);
    console.log(newName)
    console.log(newNumber)
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PhonebookSearch persons={persons} />
      <PhonebookAdd onSubmit={addPerson} />
      <PhonebookNumbers persons={persons} />
    </div>
  );
};

export default App;
