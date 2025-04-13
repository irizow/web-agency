
import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home'
import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext.jsx';

function App() {

  return (
    <LanguageProvider>
    <section className={styles.app}>
    <Header/>
    <Home/>
    </section>
    </LanguageProvider>
  )
}

export default App
