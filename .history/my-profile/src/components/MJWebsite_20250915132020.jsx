import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            MJ
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
              <li className="nav-item"><a className="nav-link btn btn-light text-primary ms-2" href="#contact">Hire Now</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="text-center text-white d-flex align-items-center justify-content-center" 
        style={{ background: "linear-gradient(135deg, #007bff, #00c6ff)", minHeight: "100vh" }}>
        <div className="container">
          <h5 className="fw-bold">Web Design & SEO Solution</h5>
          <h1 className="display-4 fw-bold">Rahul Baitha – Web Designer in Kolkata</h1>
          <p className="lead">Professional website design & SEO services tailored for businesses</p>
          <div className="mt-4">
            <a href="#contact" className="btn btn-light text-primary fw-bold px-4 rounded-pill me-2">
              LET'S DISCUSS
            </a>
            <a href="#video" className="btn btn-outline-light fw-bold px-4 rounded-pill">
              PLAY VIDEO
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-primary">Who We Are?</h2>
          <p className="text-muted mb-4">Designing Business Solutions</p>
          <p className="lead">
            Rahul Baitha is a highly regarded web designer and SEO consultant based in Kolkata. 
            With 5+ years of experience, he builds custom websites that are visually appealing, user-friendly, 
            and search engine optimized.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-primary">Our Services</h2>
          <p className="text-muted mb-4">We'll ensure you always get the best digital service</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">Web Development</h5>
                  <p>I design custom solutions to help businesses build brand awareness & drive sales.</p>
                  <a href="#contact" className="btn btn-outline-primary rounded-pill">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">On Page SEO</h5>
                  <p>Get your website to the top of search engines & attract the traffic you need.</p>
                  <a href="#contact" className="btn btn-outline-primary rounded-pill">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">Off Page SEO</h5>
                  <p>Helping businesses rank higher with professional backlink & authority strategies.</p>
                  <a href="#contact" className="btn btn-outline-primary rounded-pill">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-primary">Pricing Plans</h2>
          <p className="text-muted">Affordable packages tailored for your business</p>
          <div className="row g-4 mt-4">
            {/* Starter */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">Starter</h5>
                  <h3 className="fw-bold mt-2">₹1,599</h3>
                  <p className="text-muted">Best for small businesses & personal sites</p>
                  <ul className="list-unstyled text-start">
                    <li>✔️ 3 Pages Website</li>
                    <li>✔️ Mobile Responsive</li>
                    <li>✔️ Basic SEO Setup</li>
                  </ul>
                  <a href="#contact" className="btn btn-outline-primary rounded-pill w-100">Choose Plan</a>
                </div>
              </div>
            </div>
            {/* Professional */}
            <div className="col-md-4">
              <div className="card h-100 border-2 border-primary shadow rounded-4">
                <div className="card-body">
                  <span className="badge bg-primary rounded-pill mb-2">Best Value</span>
                  <h5 className="fw-bold text-primary">Professional</h5>
                  <h3 className="fw-bold mt-2">₹9,999</h3>
                  <p className="text-muted">Perfect for growing businesses</p>
                  <ul className="list-unstyled text-start">
                    <li>✔️ Up to 10 Pages</li>
                    <li>✔️ Advanced SEO</li>
                    <li>✔️ Blog Integration</li>
                    <li>✔️ Free 1 Year Hosting</li>
                  </ul>
                  <a href="#contact" className="btn btn-primary rounded-pill w-100 fw-bold">Most Popular</a>
                </div>
              </div>
            </div>
            {/* Enterprise */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">Enterprise</h5>
                  <h3 className="fw-bold mt-2">₹25,000</h3>
                  <p className="text-muted">Advanced solutions for enterprises</p>
                  <ul className="list-unstyled text-start">
                    <li>✔️ Unlimited Pages</li>
                    <li>✔️ Custom CMS</li>
                    <li>✔️ Full SEO Optimization</li>
                    <li>✔️ Priority Support</li>
                  </ul>
                  <a href="#contact" className="btn btn-outline-primary rounded-pill w-100">Choose Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 text-center text-white" style={{ background: "#007bff" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3"><h2 className="fw-bold">180+</h2><p>Projects Delivered</p></div>
            <div className="col-md-3"><h2 className="fw-bold">5+</h2><p>Years of Operation</p></div>
            <div className="col-md-3"><h2 className="fw-bold">5+</h2><p>Specialist Members</p></div>
            <div className="col-md-3"><h2 className="fw-bold">99%</h2><p>Happy Clients</p></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-primary">Let's Talk About Project</h2>
          <form className="mt-4 mx-auto" style={{ maxWidth: "600px" }}>
            <input type="text" className="form-control mb-3 rounded-pill" placeholder="Enter your name" />
            <input type="tel" className="form-control mb-3 rounded-pill" placeholder="Phone Number" />
            <input type="email" className="form-control mb-3 rounded-pill" placeholder="Enter your mail" />
            <textarea className="form-control mb-3 rounded-4" rows="4" placeholder="Enter your message"></textarea>
            <button className="btn btn-primary rounded-pill px-4">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-1">📍 Lake Town, Kolkata - 48</p>
          <p className="mb-1">📞 8240059967 | 📧 jamil326akhtar@gmail.com</p>
          <p className="mb-0">© 2025 MJ Web Design. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
