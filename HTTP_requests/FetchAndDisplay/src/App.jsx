import { useState } from 'react'
import './App.css'
import UserList from '../components/UserList'
import LiveClock from '../components/LiveClock'

function App() {


  return (
    <>
    <div>
      <LiveClock />
    <UserList />
  </div>
    </>
  )
}

export default App
