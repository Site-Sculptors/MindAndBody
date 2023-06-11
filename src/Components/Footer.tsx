import "../Styles/Footer.css";

const Footer = () => {

  const year = new Date().getFullYear() + " ";

  return (
    <footer className="fixed-bottom text-center">
      <p className="align-middle my-2">
        Copyright © {year}
        <a href="https://sitesculptors.com" target="_blank">
          Site Sculptors
        </a>{" "}
        by Scott Garber and Billy Martin
      </p>
    </footer>
  );
}

export default Footer;