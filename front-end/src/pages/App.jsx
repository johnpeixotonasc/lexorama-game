import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import ReportsPlayers from '../pages/views/ReportsPlayers'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/relatorios' element={<ReportsPlayers />} />
      </Routes>
    </div>
  )
}

export default App