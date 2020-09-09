import React, { useState } from 'react'
import logo from './logo.svg'
import LoginForm from './components/LoginForm'
import MainContent from './components/MainContent'
import './App.css'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className='App'>
      <header className='App-bar'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main className='App-content'>
        {(loggedIn === true) ? <MainContent /> : <LoginForm handleLogin={setLoggedIn} />}
      </main>
      <footer className='App-footer'>
        &copy; rutabaga
      </footer>
    </div>
  )
}

export default App
