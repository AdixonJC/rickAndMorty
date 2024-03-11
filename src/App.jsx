import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet, Route, Router } from 'react-router-dom'
import { Nav } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default App
