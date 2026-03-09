import teslaImg from "../assets/tesla.jpg";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

const logos = [
  { src: logo, alt: "Logo" },
  { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 2" },
  { src: logo3, alt: "Logo 3" },
  { src: logo5, alt: "Logo 5" },
  { src: logo6, alt: "Logo 6" },
  { src: logo7, alt: "Logo 7" },
];

export default function Testimonial() {
  return (
    <section className="p-4 py-8 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-4">
            <img
              src={teslaImg}
              alt="Tesla"
              className="img-fluid"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-8">
            <p className="fw-bold text-secondary">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <h6 className="fw-bold text-success mb-1">Tim Smith</h6>

            <small className="text-muted d-block mb-4">
              British Dragon Boat Racing Association
            </small>

            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="img-fluid"
                  style={{ height: "40px" }}
                />
              ))}

              <a
                href="#"
                className="text-success fw-semibold text-decoration-none"
              >
                Meet all customers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
