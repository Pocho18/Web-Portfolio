import NavBar from './components/NavBar'
import styles from './modules/App.module.css'

function App() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main></main>
    </>
  )
}

export default App
