import { useState } from 'react'
import learnerData from './learnerData.json'
import './App.css'

function App() {
  const [learners, setLearners] = useState(learnerData)
  return (<>
    {learners.map((learner, i) => <Learner key={i} learner={learner} />)}
    <LearnerForm setLearners={setLearners} /></>
  )
}
export default App

function Learner({ learner }) {
  return (<div>
    <h1>{learner.name}</h1>
    <p>{learner.bio}</p>
    {learner.scores.map((score, i) => <Score key={i} score={score} />)}
    <br />
    <br />
  </div>)
}

function Score({ score }) {
  return (<div key={score.date + score.score}>
    <div>
      <b>Score</b>: {score.score}
      <br></br>
      <b>Date</b>: {score.date}</div>
  </div>)
}

function LearnerForm({ setLearners }) {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')

  function submit() {
    setLearners(prevState => [{
      name, bio, scores: [{
        "date": "2018-02-08",
        "score": 98
      },
      {
        "date": "2018-04-22",
        "score": 95
      },
      {
        "date": "2018-09-15",
        "score": 92
      }]
    }, ...prevState])
  }

  return (<div style={{
    "display": "flex",
    "flexDirection": "column",
    "width": "50vw",
  }}>

    <label>Name</label>
    <input value={name} onChange={(e) => setName(e.target.value)} name="name"></input>
    <label>Bio</label>
    <textarea value={bio} onChange={(e) => setBio(e.target.value)} name="bio"></textarea>
    <button onClick={submit}>Create</button>

  </div>)
}