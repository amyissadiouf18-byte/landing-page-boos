import React from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon (1).png";
import icon3 from "../assets/Icon (2).png";

const Service: React.FC = () => {
  const clientLogos = [logo, logo1, logo2, logo3, logo5, logo6, logo7];
  const serviceCards = [
    {
      icon: icon1,
      title: "Membership Organisations",
      text: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: icon2,
      title: "National Associations",
      text: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: icon3,
      title: "Clubs And Groups",
      text: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>

          <div className="row text-center align-items-center mt-4 flex-nowrap overflow-auto">
            {clientLogos.map((logoSrc, index) => (
              <div key={index} className="col">
                <img
                  src={logoSrc}
                  alt="client"
                  className="img-fluid"
                  style={{ maxHeight: "45px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-4">
          <h2>
            Manage your entire community <br />
            in a single system
          </h2>
          <p className="text-muted">Who is Nextcent suitable for?</p>
        </div>

        <div className="row g-4">
          {serviceCards.map((card, index) => (
            <div key={index} className="col-md-4 text-center">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="mb-3">
                  <img src={card.icon} alt="icon" style={{ height: "60px" }} />
                </div>
                <h5 className="fw-bold">{card.title}</h5>
                <p className="text-muted">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
