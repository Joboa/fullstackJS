import React, { useState } from 'react'

// -----------Introductory project---------------
// ----------------------------------------------
const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}



const Head = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}


const Content = () => {
  return (
    <div>
      <Part part1={course.parts[0].name} exercises1={course.parts[0].exercises} />
      <Part part2={course.parts[1].name} exercises2={course.parts[1].exercises} />
      <Part part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

// --------Unicafe Project------------------
// -----------------------------------------

const Header = () => <h2>give feedback</h2>

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

// Statistics component 
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1) / all
  const positiveFeedback = (good / all) * 100

  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positiveFeedback} %</p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)


  return (
    <div>
      <Header />
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/* <Header course={course.name} /> */}
      {/* <Content /> */}
      {/* <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} /> */}
    </div>
  )
}

export default App;
