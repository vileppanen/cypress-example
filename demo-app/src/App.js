import React from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-bar'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main className='App-content'>
        content
      </main>
      <footer className='App-footer'>
        footer
      </footer>
    </div>
  )
}

export default App
