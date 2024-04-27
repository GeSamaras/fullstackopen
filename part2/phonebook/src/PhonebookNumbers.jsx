import React from 'react';

const PhonebookNumbers = ({ persons }) => {
    // maps through the persons func, adding new names
    // to the right index
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhonebookNumbers;
