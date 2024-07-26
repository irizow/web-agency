
import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home'
import Cover from './components/Cover/Cover'
import { useState, useRef } from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const ref = useRef(null)
  return (

    <div className={isDarkMode ? `${styles.dark}` : `${styles.light}`}>
    <Header scrollRef={ref} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Home ref={ref} isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
