import React from "react";
import pana from "../assets/Frame 35.png";

const Features: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

         
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src={pana}
              alt="Sign up illustration"
              className="img-fluid"
            />
          </div>

         
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="fw-bold mb-3">
              The unseen of spending three years at Pixelgrade
            </h2>

            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
              Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem
              sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium
              auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum
              pulvinar odio.
            </p>

            <button
              className="btn text-white px-4 py-2"
              style={{ backgroundColor: "#4caf4f" }}
            >
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;