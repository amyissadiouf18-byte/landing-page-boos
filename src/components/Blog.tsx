import image18 from "../assets/image 18.png";
import image19 from "../assets/image 19.png";
import image20 from "../assets/image 20.png";

const posts = [
  {
    img: image18,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    img: image19,
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    img: image20,
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

export default function Blog() {
  return (
    <>
     
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Caring is the new marketing</h2>

            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who's joining the community, read about how our community
            are increasing their membership income and lot's more.
            </p>
          </div>

          <div className="row g-4">
            {posts.map((post, i) => (
              <div className="col-lg-4 col-md-6" key={i}>

                <div className="position-relative">

                  <img
                    src={post.img}
                    alt={post.title}
                    className="img-fluid rounded"
                  />

                  <div className="card shadow position-absolute top-100 start-50 translate-middle w-75">

                    <div className="card-body text-center">

                      <p className="fw-bold">{post.title}</p>

                      <a
                        href="#"
                        className="text-success fw-semibold text-decoration-none"
                      >
                        Readmore →
                      </a>

                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-5 text-center mt-5" style={{ background: "#f5f7fa" }}>

        <div className="container">

          <h2
            className="fw-bold mb-4 mx-auto"
            style={{ maxWidth: "700px", fontSize: "2.8rem" }}
          >
            Pellentesque suscipit fringilla libero eu.
          </h2>

           <button
            className="btn px-5 py-3 fw-semibold"
            style={{
              backgroundColor: "#3d9a4e",
              color: "#fff",
              borderRadius: "6px",
            }}
          >
            Get a Demo →
          </button>

        </div>

      </section>
    </>
  );
}