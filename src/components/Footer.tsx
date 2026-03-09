import logo from "../assets/Logo (9).png";

export default function Footer() {
  return (
    <footer style={{ background: "#263238" }} className="text-light py-5">
      <div className="container">

        <div className="row align-items-start">

         
          <div className="col-lg-4 mb-4">

            <img
              src={logo}
              alt="Nexcent"
              style={{ width: "180px" }}
              className="mb-4"
            />

            <p className="text-secondary mb-1">
              Copyright © 2020 Nexcent ltd.
            </p>

            <p className="text-secondary">
              All rights reserved
            </p>

          
            <div className="d-flex gap-3 mt-4">

              <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center"
                   style={{ width: "40px", height: "40px" }}>
                <i className="bi bi-instagram"></i>
              </div>

              <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center"
                   style={{ width: "40px", height: "40px" }}>
                <i className="bi bi-dribbble"></i>
              </div>

              <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center"
                   style={{ width: "40px", height: "40px" }}>
                <i className="bi bi-twitter"></i>
              </div>

              <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center"
                   style={{ width: "40px", height: "40px" }}>
                <i className="bi bi-youtube"></i>
              </div>

            </div>
          </div>

         
          <div className="col-lg-2 col-md-4 mb-4">

            <h5 className="fw-bold mb-4">Company</h5>

            <ul className="list-unstyled text-secondary">

              <li className="mb-2">About us</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Contact us</li>
              <li className="mb-2">Pricing</li>
              <li>Testimonials</li>

            </ul>

          </div>

         
          <div className="col-lg-2 col-md-4 mb-4">

            <h5 className="fw-bold mb-4">Support</h5>

            <ul className="list-unstyled text-secondary">

              <li className="mb-2">Help center</li>
              <li className="mb-2">Terms of service</li>
              <li className="mb-2">Legal</li>
              <li className="mb-2">Privacy policy</li>
              <li>Status</li>

            </ul>

          </div>

         
          <div className="col-lg-4 col-md-4">

            <h5 className="fw-bold mb-4">Stay up to date</h5>

            <div className="input-group">

              <input
                type="email"
                className="form-control bg-secondary border-0 text-light"
                placeholder="Your email address"
              />

              <button className="btn btn-secondary">
                <i className="bi bi-send"></i>
              </button>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}