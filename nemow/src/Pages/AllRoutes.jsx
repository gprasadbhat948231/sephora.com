import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import EyeCare from './EyeCare'
import { Foundation } from './Foundation'
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/womens-Eye-Brows" element={<EyeCare />} />
    <Route path="/womens-Foundation" element={<Foundation />} />
    <Route path="/admin" element={<Admin/>}/>
  </Routes>
  )
}

export default AllRoutes