
import Home from './routes/home/Home'
import { Routes, Route } from 'react-router-dom' 
import Navigation from './routes/navigation-bar/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/check-out/Checkout'

import {  useEffect } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/Firebase'
import { setCurrentUser } from './store/user/user.action'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocument } from './utils/Firebase'
import { setCategories } from './store/category/category.action'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user))
    })

    return unsubscribe
  },[])

  useEffect(() => {
    const getCategorie = async () => {
        const temp = await getCategoriesAndDocument()
        dispatch(setCategories(temp))
    }  
    getCategorie()
  },[])

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
