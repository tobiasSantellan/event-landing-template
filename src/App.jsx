import { useState } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import EventInfo from './components/EventInfo'
import MusicButton from './components/MusicButton'
import Location from './components/Location'
import DressCode from './components/DressCode'
import Gallery from './components/Gallery'
import Gift from './components/Gift'
import RSVP from './components/Confirm'
import SongRequest from './components/SongRequest'
import ClosingImageSection from './components/ClosingImageSection'
import Footer from './components/Footer'
import { galleryConfig1, galleryConfig2 } from './config'
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
      <Gallery galleryConfig={galleryConfig1} />
      <Gift />
      <Gallery galleryConfig={galleryConfig2} />
      <RSVP />
      <SongRequest />
      <ClosingImageSection />
      <Footer />
    </>
  )
}

export default App
