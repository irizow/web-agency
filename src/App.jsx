
import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home'
import Cover from './components/Cover/Cover'
import { useState, useRef, useEffect } from 'react'

function App() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  return (

    <div className={isDarkMode ? `${styles.dark}` : `${styles.light}`}>
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setShowForm={setShowForm} isHeroVisible={isHeroVisible} />
    <Home setIsHeroVisible={setIsHeroVisible} isDarkMode={isDarkMode} showForm={showForm} setShowForm={setShowForm} />
    </div>
  )
}

export default App
