
import Home from './routes/home/Home'
import { Routes, Route } from 'react-router-dom' 
import Navigation from './routes/navigation-bar/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/check-out/Checkout'

import {  useEffect } from 'react'
import { checkUserSession } from './store/user/user.action'
import { useDispatch } from 'react-redux'
import { fetchCategoriesStart } from './store/category/category.action'
import React from 'react'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  },[])

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  })

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='Auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
