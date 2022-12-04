
import Home from './routes/home/Home'
import { Routes, Route, Outlet } from 'react-router-dom' 
import Navigation from './routes/navigation-bar/Navigation'
import SignIn from './routes/sign-in/SignIn'

const Shop = () => {
  
  return (
    <>
      <Outlet/>
      <h1>C'est moi SHOPMAN</h1>
    </>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
