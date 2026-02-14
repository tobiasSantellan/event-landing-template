import { useState } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import EventInfo from './components/EventInfo'
import MusicButton from './components/MusicButton'
import Location from './components/Location'
import DressCode from './components/DressCode'
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
      <Location />
      <DressCode />
    </>
  )
}

export default App
