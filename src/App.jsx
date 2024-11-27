
import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home'
import { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (

    <>
    <Header/>
    <Home showForm={showForm} setShowForm={setShowForm} />
    </>
  )
}

export default App
