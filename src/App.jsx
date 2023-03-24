import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting= {"Aqui se van cargar todos los productos mediante Api"} />
    </div>
  )
}

export default App
