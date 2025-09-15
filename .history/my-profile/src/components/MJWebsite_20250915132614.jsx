import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* Navbar */}
    {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
  <div className="container">
    {/* Logo */}
    <a className="navbar-brand d-flex align-items-center fw-bold fs-4" href="#home">
      <div
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: "#e67e22",
          borderRadius: "50%",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          fontSize: "20px",
          marginRight: "10px",
        }}
      >
        MJ
      </div>
      <span style={{ color: "#2c3e50" }}>Web Design</span>
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fw-semibold">
        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
        <li className="nav-item">
          <a className="btn btn-warning text-dark ms-3 rounded-pill px-3 fw-bold" href="#contact">
            Hire Now
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* Hero Section */}
<header
  id="home"
  className="d-flex align-items-center"
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f8f9fa, #ecf0f1)",
  }}
>
  <div className="container">
    <div className="row align-items-center">
      {/* Left Content */}
      <div className="col-lg-6 text-center text-lg-start">
        <h5 className="fw-bold text-warning">Web Design & SEO Solution</h5>
        <h1 className="display-4 fw-bold" style={{ color: "#2c3e50" }}>
          Jamil Akhtar – <br /> Web Designer in Kolkata
        </h1>
        <p className="lead text-muted">
          5+ Years Experience delivering professional websites & SEO services
          that rank higher and grow businesses.
        </p>
        <div className="mt-4">
          <a
            href="#contact"
            className="btn btn-warning fw-bold px-4 rounded-pill me-2"
          >
            LET'S DISCUSS
          </a>
          <a
            href="#video"
            className="btn btn-outline-dark fw-bold px-4 rounded-pill"
          >
            PLAY VIDEO
          </a>
        </div>
      </div>

      {/* Right Image/Illustration */}
      <div className="col-lg-6 text-center mt-5 mt-lg-0">
        <img
          src="https://via.placeholder.com/500x400?text=Web+Design+Illustration"
          alt="Web Design"
          className="img-fluid rounded-4 shadow-sm"
        />
      </div>
    </div>
  </div>
</header>


      {/* About */}
      <section id="about" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold" style={{ color: "#2c3e50" }}>Who We Are?</h2>
          <p className="text-muted mb-4">Designing Business Solutions</p>
          <p className="lead">
            Jamil Akhtar is a skilled web designer and SEO consultant based in
            Kolkata. With 5+ years of experience, he builds custom websites that
            are visually appealing, user-friendly, and search engine optimized.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold" style={{ color: "#2c3e50" }}>Our Services</h2>
          <p className="text-muted mb-4">
            We'll ensure you always get the best digital service
          </p>
          <div className="row g-4">
            {[
              { title: "Web Development", desc: "Custom design solutions to build brand awareness & drive sales." },
              { title: "On Page SEO", desc: "Optimize your website to rank higher & attract targeted traffic." },
              { title: "Off Page SEO", desc: "Professional backlink & authority strategies for higher ranking." },
            ].map((service, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <div className="card-body">
                    <h5 className="fw-bold" style={{ color: "#e67e22" }}>
                      {service.title}
                    </h5>
                    <p>{service.desc}</p>
                    <a
                      href="#contact"
                      className="btn btn-outline-dark rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold" style={{ color: "#2c3e50" }}>Pricing Plans</h2>
          <p className="text-muted">
            Affordable packages tailored for your business
          </p>
          <div className="row g-4 mt-4">
            {/* Starter */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold" style={{ color: "#e67e22" }}>Starter</h5>
                  <h3 className="fw-bold mt-2">₹1,599</h3>
                  <p className="text-muted">
                    Best for small businesses & personal sites
                  </p>
                  <ul className="list-unstyled text-start">
                    <li>✔️ 3 Pages Website</li>
                    <li>✔️ Mobile Responsive</li>
                    <li>✔️ Basic SEO Setup</li>
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-outline-dark rounded-pill w-100"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            {/* Professional */}
            <div className="col-md-4">
              <div className="card h-100 border-2 border-warning shadow rounded-4">
                <div className="card-body">
                  <span className="badge bg-warning text-dark rounded-pill mb-2">
                    Best Value
                  </span>
                  <h5 className="fw-bold" style={{ color: "#e67e22" }}>Professional</h5>
                  <h3 className="fw-bold mt-2">₹9,999</h3>
                  <p className="text-muted">Perfect for growing businesses</p>
                  <ul className="list-unstyled text-start">
                    <li>✔️ Up to 10 Pages</li>
                    <li>✔️ Advanced SEO</li>
                    <li>✔️ Blog Integration</li>
                    <li>✔️ Free 1 Year Hosting</li>
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-warning text-dark rounded-pill w-100 fw-bold"
                  >
                    Most Popular
                  </a>
                </div>
              </div>
            </div>
            {/* Enterprise */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold" style={{ color: "#e67e22" }}>Enterprise</h5>
                  <h3 className="fw-bold mt-2">₹25,000</h3>
                  <p className="text-muted">
                    Advanced solutions for enterprises
                  </p>
                  <ul className="list-unstyled text-start">
                    <li>✔️ Unlimited Pages</li>
                    <li>✔️ Custom CMS</li>
                    <li>✔️ Full SEO Optimization</li>
                    <li>✔️ Priority Support</li>
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-outline-dark rounded-pill w-100"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#e67e22" }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <h2 className="fw-bold">180+</h2>
              <p>Projects Delivered</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">5+</h2>
              <p>Years of Operation</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">5+</h2>
              <p>Specialist Members</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">99%</h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold" style={{ color: "#2c3e50" }}>
            Let's Talk About Project
          </h2>
          <form className="mt-4 mx-auto" style={{ maxWidth: "600px" }}>
            <input
              type="text"
              className="form-control mb-3 rounded-pill"
              placeholder="Enter your name"
            />
            <input
              type="tel"
              className="form-control mb-3 rounded-pill"
              placeholder="Phone Number"
            />
            <input
              type="email"
              className="form-control mb-3 rounded-pill"
              placeholder="Enter your mail"
            />
            <textarea
              className="form-control mb-3 rounded-4"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
            <button className="btn btn-warning text-dark rounded-pill px-4">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-white text-center" style={{ backgroundColor: "#2c3e50" }}>
        <div className="container">
          <p className="mb-1">📍 Lake Town, Kolkata - 48</p>
          <p className="mb-1">📞 8240059967 | 📧 jamil326akhtar@gmail.com</p>
          <p className="mb-0">© 2025 MJ Web Design. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
