import React, { useState } from 'react'

import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Sigin from './Pages/Sigin'
import Register from './Pages/Register'
import Cartp from './Components/Cartp'

export  const cartContext=React.createContext();
export const quantContext=React.createContext();
export default function App() {
  const[cart,setCart]=useState([])
  const[quant,setQuant]=useState(1)
  return (
    <cartContext.Provider value={{cart,setCart}}>
    <quantContext.Provider value={{quant,setQuant}}>
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Sigin' element={<Sigin/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/cart' element={ <Cartp/> }/>
      </Routes>
      </BrowserRouter>
    </div>
    </quantContext.Provider>
    </cartContext.Provider>
  )
}


