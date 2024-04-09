import { useState } from 'react'

// calls the title
const Title = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

// props the anecdote lines and puts its votes attached together
const Lines = (props) => {
  return(
    <div>
      <div>{props.anecdotes}</div>
      <div>has {props.votes} votes</div>
    </div>
  )
}


const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
  )
}

// shows the line with most votes in total
const MostVotedLine = (props) => {
  return (
    <div>
      <div>{props.anecdotes}</div>
      <div>has {props.max} votes</div>
    </div>
  )
}

// pick a random index of these lines whenever the button gets clicked
// Math.random() on the lenght of the array
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   

  const [selected, setSelected] = useState(0)


  // usestate on the votes array  
  const [allVotes, setVoted] = useState(Array(anecdotes.length).fill(0))


  // everytime the button gets clicked
  // take the rounded mathfloor of const anecdotes
  // and get a random integer corresponding to the array length
  const callRandomLine = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  // spread operator to call an array with all the values
  // sums 1 to the line displayed
  const voteClick = () => {
    const newVotes = [...allVotes]
    newVotes[selected] += 1
    setVoted(newVotes)
  }

  
  // takes the ...votes array and picks the one with highest number
  const max = Math.max(...allVotes)


  const index = allVotes.indexOf(max)

  // page body
  return (
    <div>
      <Title text='swe line of the day'/>
      <Lines anecdotes={anecdotes[selected]} votes={allVotes[selected]}/>
      <Button handleClick={callRandomLine} text='next line'/>
      <Button handleClick={voteClick} text='vote'/>
      <Title text='most voted line'/>
      <MostVotedLine anecdotes={anecdotes[index]} max={max} />
    </div>
  )
}

export default App;




