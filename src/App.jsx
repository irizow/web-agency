
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Cover from './components/Cover/Cover'
import { useState, useEffect } from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
    {isLoading && <Cover setIsLoading={setIsLoading} />}
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Hero isDarkMode={isDarkMode}/>
    </>
  )
}

export default App
