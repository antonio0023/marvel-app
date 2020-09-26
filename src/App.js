import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/ui/Header'
import Content from './components/ui/Content'
import Favorites from './components/ui/Content'
import Comics from './components/Comics'
const App = () => {
  return (
  <>
      <header className="container">
      <Header/>
    </header>
    <div className="container"><Content/></div>
  </>

  )
}

export default App
