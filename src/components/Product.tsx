import React from "react";
import pana from "../assets/pana.png";

import icon3 from "../assets/Icon (3).png";
import icon2 from "../assets/Icon (2).png";
import icon4 from "../assets/Icon (4).png";
import icon5 from "../assets/Icon (5).png";

const stats = [
  { icon: icon3, number: "46,328", label: "Clubs" },
  { icon: icon2, number: "2,245,341", label: "Members" },
  { icon: icon4, number: "828,867", label: "Event Bookings" },
  { icon: icon5, number: "1,926,436", label: "Payments" },
];

const Product: React.FC = () => {
  return (
    <>
    
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">

            
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="fw-bold">
                Helping a local <br />
                <span style={{ color: "#4caf4f" }}>
                  business reinvent itself
                </span>
              </h2>

              <p className="text-muted mt-3">
                We reached here with our hard work and dedication
              </p>
            </div>

           
            <div className="col-lg-7">
              <div className="row g-4">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={stat.icon}
                        alt={stat.label}
                        style={{ height: "40px" }}
                      />

                      <div>
                        <h5 className="fw-bold mb-0">{stat.number}</h5>
                        <small className="text-muted">
                          {stat.label}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

     
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

       
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <img src={pana} alt="Illustration" className="img-fluid" />
            </div>

   
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="fw-bold mb-3">
                The unseen of spending three years at Pixelgrade
              </h2>

              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed sit amet justo ipsum.
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
    </>
  );
};

export default Product;