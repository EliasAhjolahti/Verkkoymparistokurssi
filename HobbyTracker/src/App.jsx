import { useState } from 'react'
import './App.css'
import { HobbyTrackerContext, HobbyTrackerProvider } from './context/HobbyTrackerContext'
import AddHobbyForm from './components/AddHobbyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HobbyTrackerProvider>
    <AddHobbyForm />
    </HobbyTrackerProvider>
    </>
  )
}

export default App
