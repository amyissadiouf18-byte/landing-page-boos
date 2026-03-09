import React from "react";
import heroImage from "../assets/hero.png";

const Hero: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold">
              Lessons and insights <br />
              <span style={{ color: "#4caf4f" }}>from 8 years</span>
            </h1>

            <p className="lead text-muted mt-3">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <button
              className="btn text-white mt-3 px-4 py-2"
              style={{ backgroundColor: "#4caf4f" }}
            >
              Register
            </button>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <span
            className="mx-2"
            style={{ fontSize: "1.2rem", color: "#4caf4f" }}
          >
            ●
          </span>
          <span className="mx-2" style={{ fontSize: "1.2rem", color: "#ccc" }}>
            ●
          </span>
          <span className="mx-2" style={{ fontSize: "1.2rem", color: "#ccc" }}>
            ●
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
