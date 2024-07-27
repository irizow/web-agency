
import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home'
import Cover from './components/Cover/Cover'
import { useState, useRef } from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  return (

    <div className={isDarkMode ? `${styles.dark}` : `${styles.light}`}>
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setShowForm={setShowForm} />
    <Home isDarkMode={isDarkMode} showForm={showForm} setShowForm={setShowForm} />
    </div>
  )
}

export default App
