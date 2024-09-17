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
    <div style={{'fontWeight':'bold'}}>{name}</div>
    <span>BIO: {bio}</span>
    {scores.map(score => Score(score))}
    <br/>
    <br/>
  </div>)
}



function Score({ score, date }) {

  return (<div>
    <div>Score: {score}  Date:{date}</div>
  </div>)
}