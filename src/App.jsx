import { useState } from 'react'
import jiujitsuLogo from './assets/Jiujitsu.svg'
import {words}  from './wordlist.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [randomWord, setRandomWord] = useState('');

  const generateWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex])
  }

  return (
    <>
      <h1>BJJ Technique Generator</h1>
      <h3>A guide to your Jiu Jitsu Journey.</h3>
      <div className="card">
        <button onClick={generateWord}>Generate Technique</button>
        <p>You should train {randomWord} this week.</p>
      </div>
    </>
  )
}

export default App
