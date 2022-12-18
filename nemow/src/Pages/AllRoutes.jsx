import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import EyeCare from './EyeCare'
import { Foundation } from './Foundation'
import CartPage from '../Components/CartPage/CartPage'
import Home from './Home'
import New from './New'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/new" element={<New />} />
    <Route path="/eyecare" element={<EyeCare />} />
    <Route path="/foundation" element={<Foundation />} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/admin" element={<Admin/>}/>
  </Routes>
  )
}

export default AllRoutes