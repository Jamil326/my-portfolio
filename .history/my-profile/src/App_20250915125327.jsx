import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Header  from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     
    </>
  )
}

export default App
