import yogaImage from '/mind_and_body_yoga.jpg'
import { useState } from 'react'

export default function Home() {

  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <div className="row row align-items-center mt-5"  >
        <div className="col-6">
          <h1 className="m-4 align-middle b" >Mind And Body</h1>
          <h5 className="m-4 align-middle b" >Become a better version of yourself</h5>
        </div>
        <div className="col-sm-6">
          <a>
            <img src={yogaImage} alt="Yoga Pic" height="400px" className="m-4 img-fluid rounded hover-overlay" />
          </a>
        </div>
      </div>

      <div className="card mt-5">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}