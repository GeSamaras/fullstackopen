
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'jonas brothers', number: '12312323' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    
    // checks if the new name already exists
    const nameExists = persons.find((person) => person.name === newName)
    
    // simple if statement seeing if names are in the array
    if (nameExists) {
      alert(`${newName} is already added to the phonebook.`)
      return
    }

    // Add the new name
    const newPersons = [...persons, { name: newName, number: newNumber }]
    setPersons(newPersons)
    setNewName('')
    setNewNumber('')
    console.log(setNewNumber)
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  console.log(newName)
  console.log(newNumber)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h2>Search</h2>
        <input />
      </div>
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
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          // maps through the persons func, adding new names
          // to the right index
          <li key={index}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
