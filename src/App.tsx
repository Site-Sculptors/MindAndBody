import { useState } from 'react'
import './App.css'
import MainHeader from './Views/MainHeader.tsx'
import NavBar from './Views/NavBar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <MainHeader />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Created by Scott Garber and Billy Martin
      </p>
    </>
  )
}

export default App
