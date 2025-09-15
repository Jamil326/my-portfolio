import React from "react";

/**
 * MJWebsiteLanding (Bootstrap version)
 * One-page landing site for MJ Web Design & SEO
 *
 * 👉 Requirements:
 * Add Bootstrap 5 in index.html:
 * <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
 * <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
 */

export default function MJWebsiteLanding() {
  return (
    <div className="bg-light text-dark" style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#home">
            MJ Web Design & SEO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#home">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">SERVICES</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">PORTFOLIO</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">ABOUT US</a></li>
              <li className="nav-item"><a className="nav-link" href="#blog">BLOG</a></li>
              <li className="nav-item"><a className="btn btn-primary ms-2" href="#contact">HIRE NOW</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="bg-white text-center py-5">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Web Design & SEO Solution</h1>
          <p className="lead text-muted">
            Rahul Baitha – Web Designer in Kolkata <br />
            Web Development & SEO services provider in Kolkata
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="#contact" className="btn btn-primary btn-lg">LET'S DISCUSS</a>
            <a href="#" className="btn btn-outline-secondary btn-lg">PLAY VIDEO</a>
          </div>
          <p className="mt-4 small text-muted">5+ Years of Experience – Helping businesses grow with design & SEO</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5 bg-light border-top">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h2 className="h3">Who we are?</h2>
              <p className="text-muted">
                MJ Web Design & SEO is a professional web design and SEO agency based in Kolkata. 
                We craft beautiful, functional websites that are optimized for search engines and user experience. 
                With over 5 years of experience, we’ve helped 180+ businesses grow online.
              </p>
              <ul className="list-unstyled">
                <li>✔️ Custom Web Design</li>
                <li>✔️ SEO Optimized</li>
                <li>✔️ Affordable Pricing</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/600x400?text=Your+Brand+Image"
                alt="About MJ"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="h3 text-center">Our Services</h2>
          <p className="text-muted text-center">Service we can help you with</p>
          <div className="row g-4 mt-3">
            <ServiceCard title="Web Development" desc="Custom website design solutions to help businesses build brand awareness and drive sales." />
            <ServiceCard title="On Page SEO" desc="We optimize your website content and structure to rank higher in search engines." />
            <ServiceCard title="Off Page SEO" desc="Boost your authority with high-quality backlinks and advanced SEO strategies." />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-5 bg-white border-top">
        <div className="container">
          <h2 className="h3 text-center">Check Our Work</h2>
          <p className="text-muted text-center">Explore Our Latest Projects</p>
          <div className="row g-4 mt-3">
            {["Decofootfloor", "Electronic Website", "Shivshanker Group", "Dhali Global Trade"].map((p, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img src={`https://via.placeholder.com/400x250?text=${p}`} className="card-img-top" alt={p} />
                  <div className="card-body">
                    <h5 className="card-title">{p}</h5>
                    <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h3 text-center">What Our Clients Say</h2>
          <div className="row g-4 mt-3">
            <TestimonialCard
              name="Mr. Tarak Dhali"
              role="Dhali Global Trade"
              text="MJ is a professional, easy to work with, and created a great website for my business!"
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

      {/* Stats */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <div className="row">
            <StatCard number="180+" label="Projects Delivered" />
            <StatCard number="5+" label="Years of Operation" />
            <StatCard number="5+" label="Specialist Members" />
            <StatCard number="99%" label="Happy Clients" />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-5">
        <div className="container">
          <h2 className="h3 text-center">Our Blog Articles</h2>
          <div className="row g-4 mt-3">
            <BlogCard title="How to Choose the Right SEO Expert" date="Aug 2, 2024" category="Uncategorized" />
            <BlogCard title="Top 10 Web Design Companies in Kolkata" date="Aug 27, 2023" category="Web Design" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-white border-top">
        <div className="container">
          <h2 className="h3 text-center">Let’s Talk About Your Project</h2>
          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" placeholder="Enter your phone" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={5} placeholder="Enter your message"></textarea>
                </div>
                <button className="btn btn-primary">SEND MESSAGE</button>
              </form>
            </div>
            <div className="col-md-6">
              <h5>Contact Info</h5>
              <p className="text-muted">
                📍 Lake Town, Kolkata – 48 <br />
                📞 8240059967 <br />
                ✉️ jamil326akhtar@gmail.com
              </p>
              <h6>Follow Us</h6>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-outline-secondary btn-sm">Facebook</a>
                <a href="#" className="btn btn-outline-secondary btn-sm">LinkedIn</a>
                <a href="#" className="btn btn-outline-secondary btn-sm">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-4">
        <div className="container text-center">
          <p className="mb-1">&copy; 2025 MJ Web Design & SEO. All Rights Reserved.</p>
          <small className="text-muted">Privacy Policy | Terms of Use</small>
        </div>
      </footer>
    </div>
  );
}

/* --- Subcomponents --- */
function ServiceCard({ title, desc }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="text-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <blockquote className="blockquote">{text}</blockquote>
          <footer className="blockquote-footer">{name}, <cite>{role}</cite></footer>
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="col-md-3">
      <h2 className="fw-bold">{number}</h2>
      <p>{label}</p>
    </div>
  );
}

function BlogCard({ title, date, category }) {
  return (
    <div className="col-md-6">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="text-muted small">{category} – {date}</p>
          <a href="#" className="btn btn-outline-primary btn-sm">READ MORE</a>
        </div>
      </div>
    </div>
  );
}
