import React from 'react'

import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth' element={<AuthPage/>}/>
      </Routes>
    </div>
  )
}

export default App
