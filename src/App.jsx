import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './pages/Register'
import Kategori from './pages/Kategori'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login' 
import { BrowserRouter, Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>


       <Header/>
      
      {/* <Register/> */}

      <Home/>
      
      {/* <Kategori/> */}

      {/* <Detail/> */}
      
      <Login/> 

       <Footer/>
    </>
  )
}

export default App
