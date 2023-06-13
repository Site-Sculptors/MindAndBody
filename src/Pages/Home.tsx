import yogaImage from "/mind_and_body_yoga.jpg";
import "../Styles/Home.css";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg m-0 p-0">
      <div className="row row align-items-center m-5">
        <div className="col-12 col-md-6 mt-5 ">
          <h1 className="mb-0 align-middle  fw-bolder">Mind And Body</h1>
          <h5 className="mb-2 mt-0 align-middle">
            Become a better version of yourself
          </h5>
        </div>
        <div className="col-12 col-md-6">
          <a>
            <img
              src={yogaImage}
              alt="Yoga Pic"
              height="400px"
              className="img-fluid rounded hover-overlay"
            />
          </a>
        </div>
      </div>

      {/*  <div className="card mt-5">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </div>
  );
}
