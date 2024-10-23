
import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home'
import { useState } from 'react';
import Squiggle from './components/Squiggle/Squiggle';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (

    <div>
    <Header setShowForm={setShowForm}/>
    <Home showForm={showForm} setShowForm={setShowForm} />
    </div>
  )
}

export default App
