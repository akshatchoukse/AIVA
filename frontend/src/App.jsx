import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import UserContext from './context/userContext'

function App() {
  return (
    <UserContext>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </UserContext>
  )
}

export default App