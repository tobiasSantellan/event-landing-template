import { useState } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import EventInfo from './components/EventInfo'
import MusicButton from './components/MusicButton'
import './App.css'

function App() {
  const [entered, setEntered] = useState(false)

  if (!entered) {
    return <Loader onEnter={() => setEntered(true)} />
  }

  return (
    <>
      <Hero />
      <EventInfo />
      <MusicButton />
    </>
  )
}

export default App
