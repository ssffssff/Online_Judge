import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Qeustion";
// import backgroundImage from "./background.jpg"; // Replace "background.jpg" with the path to your image file

const Home = () => {
  const handleHomeClick = () => {
    window.location.href = "/Home";
  };

  return (
    <div>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#eaeaea" }}>
        <div className="container">
          <button
            className="navbar-brand mb-0 h1 btn btn-outline-primary btn-sm font-weight-bold rounded-pill border-2 border-primary"
            style={{ fontSize: "20px" }}
            onClick={handleHomeClick}
          >
            Home
          </button>
          <div>
            <a href="#" className="btn btn-primary btn-sm rounded-pill border-2 border-primary mr-2">Login</a>
            <span className="mx-2"></span>
            <a href="#" className="btn btn-primary btn-sm rounded-pill border-2 border-primary">Register</a>
          </div>
        </div>
      </nav>
      <div
      //   style={{
      //     backgroundImage: `url(${backgroundImage})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     minHeight: "100vh",
      //     display: "flex",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
      >
        <h2>Home Component</h2>
      </div>
      {/* Add additional content or components for your homepage */}
      {/* <div> */}
        <Question />
      {/* </div> */}

    </div>
  );
};

export default Home;
