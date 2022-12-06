
import Home from './routes/home/Home'
import { Routes, Route, Outlet } from 'react-router-dom' 
import Navigation from './routes/navigation-bar/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='Auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  )
}

export default App;
