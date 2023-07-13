import React from 'react'

import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
   
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


