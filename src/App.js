import React from 'react'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
