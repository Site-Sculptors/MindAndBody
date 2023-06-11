import flexImage from "/mind_and_body_flex.jpg";
import SigninForm from "../Components/SigninForm";

const Signin = () => {
  return (
    <div className="row row align-center align-items-center mt-5">
      <h1 className="m-4 align-middle b">Sign In</h1>
      <div className="row" >
        <div className="col-7"   >
          <SigninForm />
        </div>
        <div className="col-5 align-center"   >
          <img
            src={flexImage}
            alt="Yoga Pic"
            height="400px"
            className="img-fluid rounded hover-overlay col-5 ms-5" />
        </div>
      </div>
    </div>
  );
}

export default Signin;