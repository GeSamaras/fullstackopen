import { useState } from 'react'

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  if (sum === 0){
    return (
      <div>
          <p>No feedback given</p>
        </div>
      )
    } 
    return (
      <table>
        <tbody>
          <StatisticLine text='Pog' value={props.good} />
          <StatisticLine text='Meh' value={props.neutral} />
          <StatisticLine text='Yuck' value={props.bad} />
          <StatisticLine text='All' value={sum} />
          <StatisticLine text='Average' value={(props.good * 1 + props.neutral * 0 + props.bad * (-1))/sum} />
          <StatisticLine text='Positive' value={`${parseFloat(props.good / sum) * 100 } %`}/>
        </tbody>
      </table>
    )
  }
  
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick} >{props.text}</button>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
        <p>give feedback</p>
        <Button handleClick={handleGoodClick} text='Pog'/>
        <Button handleClick={handleNeutralClick} text='Meh'/>
        <Button handleClick={handleBadClick} text='Yuck'/>
        <p>statistics</p>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
  
  
  export default App
  