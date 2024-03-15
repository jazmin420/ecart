import Footer from './components/Footer'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Cart from './pages/Cart'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>

   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/wishlist' element={<Wishlist/>} />
   <Route path='/cart' element={<Cart/>} />
    <Route path='/view/:id' element={<View/>} />
    <Route path='/*' element={<Navigate to={'/'} />} />
</Routes>
   <Footer/>
    </>
  )
}

export default App