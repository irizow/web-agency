
import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home'
import Cover from './components/Cover/Cover'
import { useState, useEffect } from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  
  return (

    <div className={isDarkMode ? `${styles.dark}` : `${styles.light}`}>
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Home isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
