// PAGES
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

//OTHERS
import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {isLoggedIn === false ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  )
}

export default App
