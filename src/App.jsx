import { useState } from 'react'
import learnerData from './learnerData.json'
import './App.css'

function App() {
  const [learners, setLearners] = useState(learnerData)
  
  return (
    <>
      {learners.map(learner => (Learner(learner)))}
    </>
  )
}

export default App



function Learner({ name, bio, scores }) {
  return (<div>
    <div>{name}{bio}</div>
    {scores.map(score => Score(score))}
  </div>)
}



function Score({ score, date }) {

  return (<div>
    <div>{score} {date}</div>
  </div>)
}