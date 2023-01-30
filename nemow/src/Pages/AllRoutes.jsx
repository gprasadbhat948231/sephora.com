import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import EyeCare from './EyeCare'
import CartPage from '../Components/CartPage/CartPage'
import Home from './Home'
import New from './New'
import Wishlist from './Wishlist'
import Found from './Found'
import PrivateRoute from '../HOC/LoginRedux/PrivateRoute'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<New />} />
    <Route path="/eyecare" element={<EyeCare />} />
    <Route path="/foundation" element={<Found/>} />
    <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>} />
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/wishlist" element={<PrivateRoute><Wishlist/></PrivateRoute>}/>
  </Routes>
  )
}

export default AllRoutes