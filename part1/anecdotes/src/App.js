import { useState } from 'react'

const App = () => {
  // list of anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [votes, setVotes] = useState(Array(7).fill(0))
  const [selected, setSelected] = useState(0)
  // this selects a random anecdote
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    return (
      selected
    )
  }
  // this increases the votes for the selected anecdote
  const increaseVotes = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  //  line 33 had a bug, it was not showing the anecdote with the most votes, instead it was showing the whole array of votes
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={randomAnecdote}>NextAnecdote</button>
      <button onClick={increaseVotes}>Vote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
  )
}

export default App