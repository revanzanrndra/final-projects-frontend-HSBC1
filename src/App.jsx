import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      
      <Register/>

      <Footer/>
    </>
  )
}

export default App
