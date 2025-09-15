import React from "react";

/**
 * MJWebsiteLanding (Aesthetic Bootstrap version)
 */

export default function MJWebsiteLanding() {
  return (
    <div className="bg-light text-dark" style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-white" href="#home">
            MJ Web Design & SEO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {["HOME", "SERVICES", "PORTFOLIO", "ABOUT US", "BLOG"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link text-white fw-semibold" href={`#${item.toLowerCase().replace(" ", "")}`}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a className="btn btn-warning ms-2 fw-bold rounded-pill" href="#contact">
                  HIRE NOW
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #4F46E5, #6366F1)",
        }}
      >
        <div className="container py-5">
          <h1 className="display-4 fw-bold">Web Design & SEO Solution</h1>
          <p className="lead mt-3">
            Rahul Baitha – Web Designer in Kolkata <br />
            Helping businesses grow with modern websites & SEO
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="#contact" className="btn btn-warning btn-lg rounded-pill px-4 fw-bold">
              LET'S DISCUSS
            </a>
            <a href="#" className="btn btn-outline-light btn-lg rounded-pill px-4">
              ▶ PLAY VIDEO
            </a>
          </div>
          <p className="mt-5 fst-italic">“Let us create a website that stands out & ranks high.”</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5 bg-light border-top">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h2 className="fw-bold text-primary">Who we are?</h2>
              <p className="text-muted">
                MJ Web Design & SEO is a professional agency in Kolkata. We
                design stunning websites and optimize them for search engines.
                With 5+ years of experience and 180+ projects, we help businesses
                grow online.
              </p>
              <ul className="list-unstyled">
                <li>✔️ Custom Web Design</li>
                <li>✔️ SEO Optimized</li>
                <li>✔️ Affordable Pricing</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/600x400?text=MJ+Web+Design"
                alt="About MJ"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold text-primary">Our Services</h2>
          <p className="text-muted">Service we can help you with</p>
          <div className="row g-4 mt-3">
            <ServiceCard
              icon="💻"
              title="Web Development"
              desc="Custom website design solutions to help businesses build brand awareness and drive sales."
            />
            <ServiceCard
              icon="📈"
              title="On Page SEO"
              desc="We optimize your website content and structure to rank higher in search engines."
            />
            <ServiceCard
              icon="🔗"
              title="Off Page SEO"
              desc="Boost your authority with backlinks and advanced SEO strategies."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-5 text-center text-white"
        style={{ background: "linear-gradient(135deg, #6366F1, #4F46E5)" }}
      >
        <div className="container">
          <div className="row">
            <StatCard number="180+" label="Projects Delivered" />
            <StatCard number="5+" label="Years of Operation" />
            <StatCard number="5+" label="Specialist Members" />
            <StatCard number="99%" label="Happy Clients" />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-primary text-center">Check Our Work</h2>
          <div className="row g-4 mt-3">
            {["Decofootfloor", "Electronic Website", "Shivshanker Group", "Dhali Global Trade"].map((p, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm rounded-3">
                  <img
                    src={`https://via.placeholder.com/400x250?text=${p}`}
                    className="card-img-top rounded-top"
                    alt={p}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p}</h5>
                    <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-primary text-center">What Our Clients Say</h2>
          <div className="row g-4 mt-3">
            <TestimonialCard
              name="Mr. Tarak Dhali"
              role="Dhali Global Trade"
              text="MJ is professional, easy to work with, and created a great website for my business!"
            />
            <TestimonialCard
              name="Ashmita Ghosh"
              role="Beauty SPA"
              text="Their SEO service is excellent! My rankings improved and I gained new clients."
            />
            <TestimonialCard
              name="Stefan Rubi"
              role="E-commerce Website"
              text="Top web designer in Kolkata! Stunning design and smooth collaboration."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-light border-top">
        <div className="container">
          <h2 className="fw-bold text-primary text-center">Let’s Talk About Your Project</h2>
          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <form className="bg-white p-4 rounded shadow">
                <div className="mb-3">
                  <input type="text" className="form-control rounded-pill" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control rounded-pill" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control rounded-pill" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control rounded" rows={4} placeholder="Your Message"></textarea>
                </div>
                <button className="btn btn-primary rounded-pill w-100 fw-bold">SEND MESSAGE</button>
              </form>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold">Contact Info</h5>
              <p className="text-muted">
                📍 Lake Town, Kolkata – 48 <br />
                📞 8240059967 <br />
                ✉️ jamil326akhtar@gmail.com
              </p>
              <h6 className="fw-bold">Follow Us</h6>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-outline-primary btn-sm rounded-pill">Facebook</a>
                <a href="#" className="btn btn-outline-primary btn-sm rounded-pill">LinkedIn</a>
                <a href="#" className="btn btn-outline-primary btn-sm rounded-pill">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4" style={{ background: "#1F2937" }}>
        <div className="container text-center text-white">
          <p className="mb-1">&copy; 2025 MJ Web Design & SEO. All Rights Reserved.</p>
          <small className="text-muted">Privacy Policy | Terms of Use</small>
        </div>
      </footer>
    </div>
  );
}

/* --- Subcomponents --- */
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm p-3 rounded-4">
        <div className="card-body text-center">
          <div className="fs-1 mb-3">{icon}</div>
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm rounded-4">
        <div className="card-body">
          <blockquote className="blockquote">{text}</blockquote>
          <footer className="blockquote-footer mt-2">
            {name}, <cite>{role}</cite>
          </footer>
        </div>
      </div>
    </div>
  );
}



function StatCard({ number, label }) {
  return (
    <div className="col-md-3">
      <h2 className="fw-bold display-5">{number}</h2>
      <p>{label}</p>
    </div>
  );
}
