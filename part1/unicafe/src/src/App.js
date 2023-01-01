import { useState } from 'react'

//component for displaying statistics
const TableDisplay = ({input, good, neutral, bad}) => {
  let temp = 0
  let input_list = ["good", "neutral", "bad", "all", "average", "positive"]
  let output_list = [good, neutral, bad, good + neutral + bad, (good - bad) / (good + neutral + bad), good / (good + neutral + bad)*100]
  for (let i = 0; i < input_list.length; i++) {
    if (input_list[i] === input) {
      return (
        <tr>
          <td>{input_list[i]}</td>
          <td>{output_list[i]}</td>
        </tr>
      )
    }
  }
}
//component for calling the statistics display and formatting it properly
const StatsDisplay = ({good, neutral, bad}) =>{
  return (
    <div>
      <h4>statistics</h4>
      <table>
        <tbody>
          <TableDisplay input = {"good"} good = {good} neutral={neutral} bad={bad}/> 
          <TableDisplay input = {"neutral"} good = {good} neutral={neutral} bad={bad}/> 
          <TableDisplay input = {"bad"} good = {good} neutral={neutral} bad={bad}/> 
          <TableDisplay input = {"all"} good = {good} neutral={neutral} bad={bad} />
          <TableDisplay input = {"average"} good = {good} neutral={neutral} bad={bad}/> 
          <TableDisplay input = {"positive"} good = {good} neutral={neutral} bad={bad}/>
        </tbody>
      </table>
    </div>
  )

}
//button component
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

//main component
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

    // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>{"give feedback"}</h1>
      <Button handleClick={() => setGood(good +1)} text= "good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text= "neutral" />
      <Button handleClick={() => setBad(bad + 1)} text= "bad" />
      <StatsDisplay good ={good} neutral = {neutral} bad = {bad} />
    </div>
  )
  }
export default App