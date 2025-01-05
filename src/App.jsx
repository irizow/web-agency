
import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home'
import { useState } from 'react';
import Hero2 from './components/Hero/Hero2';
import TitleScroll from './components/TitleScroll/TitleScroll';
import logoImg from './assets/images/limelogo.png'

function App() {
  const [showForm, setShowForm] = useState(false);

  return (

    <>
    <Header/>
    <Home/>
    </>
  )
}

export default App
