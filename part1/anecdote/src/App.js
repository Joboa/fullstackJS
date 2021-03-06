import React, { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>

const Anecdotes = ({anecdote}) => <p>{anecdote}</p>

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const CountVote = ({votes}) => <div>has {votes} votes</div>

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  // Get the a random index of anecdotes
  const [selected, setSelected] = useState(0)
  const getIndex = Math.floor(Math.random() * (anecdotes.length))
  const handleChange = () => setSelected(getIndex)

  // Count vote per anecdote
  const votesArray = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(votesArray)

  const handleAnecdoteVote = () => {
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)
  }

// find the largest number of votes
  const largestVote = Math.max(...votes)
  const highestAnecdoteVote = anecdotes[votes.indexOf(largestVote)]

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdotes anecdote={anecdotes[selected]} />
      <CountVote votes={votes[selected]} />
      <Button handleClick={handleChange} text="next anecdote" />
      <Button handleClick={handleAnecdoteVote} text="vote" />
      <Header text="Anecdote with most votes" />
      <Anecdotes anecdote={highestAnecdoteVote} />
      <CountVote votes={largestVote} />
    </div>
  )
}

export default App;
