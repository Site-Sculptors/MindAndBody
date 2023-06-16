import flexImage from "/mind_and_body_flex.jpg";
import SigninForm from "../Components/SigninForm";

const Signin = () => {
  return (
    <div className="row row align-center align-items-center m-5">
      <h1 className="m-4 align-middle b">Sign In</h1>
      <div className="row" >
        <div className="col-12 col-md-7"   >
          <SigninForm />
        </div>
        <div className="col-0 col-md-5 align-center"  >
          <img
            src={flexImage}
            alt="Yoga Pic"
            height="400px"
            className="img-fluid rounded hover-overlay col-5 ms-5  d-none d-md-block" />
        </div>
      </div>
    </div>
  );
}

export default Signin;