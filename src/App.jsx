
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

    <div className={styles.maintenance} style={{width: '100vw',padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10vh', height: '100vh', color: 'var(--white)', backgroundColor: 'var(--black)', textAlign: 'center', fontFamily: 'Inter'}}>
      <img style={{width: '40vh'}} src={logoImg} alt='built by lime logo'></img>
      <div>
        <p style={{marginBottom: '2rem'}}>Our website is currently under maintenance, but we'll be back shortly!</p>
        <span style={{ background: 'linear-gradient(#A8D3F6, var(--dark-purple))',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        fontSize: '2rem',
        height: '3rem',
        display: 'inline-block',
        padding: '0.5rem',
        }}>hello@builtbylime.com</span>
      </div>
    </div>
    </>
  )
}

export default App
