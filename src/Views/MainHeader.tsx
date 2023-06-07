import yogaImage from '/mind_and_body_yoga.jpg'

function MainHeader() {

  return(
<div className="container">
      <div className="row row align-items-center"  >
      <div className="col-6">
      <h1 className="m-4 align-middle b" >Mind And Body</h1>
      <h5 className="m-4 align-middle b" >Become a better version of yourself</h5>
      </div>
      <div className="col-sm-6">
          <a>
          <img src={yogaImage}  alt="Yoga Pic" height="400px" className="m-4 align-middle" />
        </a>
        </div>
      </div>
      </div>
)}

export default MainHeader