import { useState } from 'react'
import yogaImage from '/mind_and_body_yoga.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="container">
      <div className="row" >
      <div className="col-6">
      <h1>Mind And Body</h1>
      </div>
      <div className="col-sm-6">
          <a>
          <img src={yogaImage}  alt="Yoga Pic" width="500px" height="400px"  />
        </a>
        </div>
      </div>
      </div>
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
