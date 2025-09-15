import React from "react";

/**
 * MJWebsite (Bootstrap version)
 * - Single-file React component for MJ (renamed from BrandCurb)
 * - Requires Bootstrap 5 CSS (and optionally JS for navbar toggler)
 *   Example CDN (public/index.html):
 *   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
 *   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
 *
 * Drop this component into your React app and adjust images/text/links as needed.
 */

export default function MJWebsite() {
  return (
    <div className="bg-light text-dark" style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center gap-2" href="#">
              <div
                className="rounded d-flex align-items-center justify-content-center text-white fw-bold"
                style={{
                  width: 44,
                  height: 44,
                  background: "linear-gradient(135deg,#6366f1,#ec4899)",
                }}
              >
                MJ
              </div>
              <div className="ms-2">
                <div className="h6 mb-0">MJ Web Design</div>
                <small className="text-muted">Complete Web Design &amp; Development</small>
              </div>
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#work">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item ms-2"><a className="btn btn-primary" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="bg-white py-5">
          <div className="container py-5">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <h1 className="display-5 fw-bold">Beautiful, reliable websites that grow your business</h1>
                <p className="lead text-muted">
                  Say goodbye to communication headaches and overbilling. MJ builds custom WordPress, WooCommerce and React websites focused on conversions — not just looks.
                </p>

                <div className="d-flex gap-2 mt-4">
                  <a href="#contact" className="btn btn-primary btn-lg">Start a Project</a>
                  <a href="#work" className="btn btn-outline-secondary btn-lg">View Portfolio</a>
                </div>

                <p className="mt-4 small text-muted"><strong>Did you know?</strong> 38% of visitors will stop engaging with an unattractive website.</p>
              </div>

              <div className="col-md-6">
                <div className="card shadow-sm">
                  <img src="https://via.placeholder.com/800x500?text=MJ+Website+Preview" className="card-img-top" alt="MJ preview" />
                  <div className="card-body">
                    <div className="row text-muted small">
                      <div className="col-6 mb-2">
                        <strong>Speed Optimized</strong>
                        <div>Fast loading &amp; mobile-friendly</div>
                      </div>
                      <div className="col-6 mb-2">
                        <strong>SEO Ready</strong>
                        <div>On-page SEO &amp; schema basics</div>
                      </div>
                      <div className="col-6 mb-2">
                        <strong>Ecommerce</strong>
                        <div>WooCommerce &amp; payments</div>
                      </div>
                      <div className="col-6 mb-2">
                        <strong>Support</strong>
                        <div>Maintenance &amp; analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-5">
          <div className="container">
            <h2 className="h3">Our Services</h2>
            <p className="text-muted">Custom web solutions for businesses of all sizes.</p>

            <div className="row g-4 mt-3">
              <ServiceCard title="Custom Web Design" desc="Tailor-made designs focused on conversions and brand clarity." />
              <ServiceCard title="E-commerce & WooCommerce" desc="Full e-commerce builds with payment integration and shipping rules." />
              <ServiceCard title="SEO & Performance" desc="Technical SEO, content suggestions, and performance optimization." />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-5 border-top">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <h2 className="h3">Why MJ?</h2>
                <p className="text-muted">
                  We don’t just make websites — we deliver measurable results. Using design thinking, performance engineering, and data-driven marketing, MJ helps SMBs compete and grow.
                </p>

                <ul className="list-unstyled mt-3">
                  <li className="mb-2"><span className="badge bg-primary me-2">1</span>Personalized packages for your budget and goals.</li>
                  <li className="mb-2"><span className="badge bg-primary me-2">2</span>Transparent pricing — no unnecessary retainers.</li>
                  <li className="mb-2"><span className="badge bg-primary me-2">3</span>Ongoing support and analytics to keep improving results.</li>
                </ul>
              </div>

              <div className="col-md-6">
                <div className="p-4 rounded" style={{ background: "linear-gradient(135deg,#f5f7ff,#fff0f6)" }}>
                  <h5>Clients love us</h5>
                  <p className="text-muted">90% of our clients return for repeat work — quality and results matter most.</p>

                  <div className="mt-3">
                    <blockquote className="blockquote">"MJ revamped our store and conversions increased by 42% in 3 months." — Retail Client</blockquote>
                    <blockquote className="blockquote">"Quick turnaround, transparent billing, excellent communication." — Agency Partner</blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="py-5">
          <div className="container">
            <h2 className="h3">Selected Projects</h2>
            <p className="text-muted">A small sampling of sites we've built.</p>

            <div className="row g-4 mt-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="col-sm-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <img src={`https://via.placeholder.com/600x350?text=Project+${i + 1}`} className="card-img-top" alt={`Project ${i + 1}`} />
                    <div className="card-body">
                      <h5 className="card-title">Project {i + 1}</h5>
                      <p className="card-text text-muted">E-commerce / WordPress / Performance</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-white py-5 border-top">
          <div className="container">
            <h2 className="h3">Pricing Packages</h2>
            <p className="text-muted">Choose a package or request a custom quote.</p>

            <div className="row g-4 mt-3">
              <PricingCard title="Starter" price="₹25,000" features={["Custom homepage","3 inner pages","Basic SEO","1 month support"]} />
              <PricingCard title="Business" price="₹60,000" features={["Custom design","Up to 10 pages","WooCommerce","3 months support"]} highlight />
              <PricingCard title="Enterprise" price="Custom" features={["Custom CMS","Integrations","Advanced SEO","Priority support"]} />
            </div>

            <p className="mt-3 text-muted small">Have questions about pricing? Schedule a consultation and we’ll help you choose the right package.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <h2 className="h4">Get in touch</h2>
                <p className="text-muted">Tell us about your project and we’ll provide a clear, no-pressure quote.</p>

                <div className="card shadow-sm">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input type="text" className="form-control" placeholder="Your name" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="you@company.com" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Project brief</label>
                        <textarea className="form-control" rows={6} placeholder="Tell us about your goals" />
                      </div>

                      <div className="d-flex gap-2">
                        <button type="button" className="btn btn-primary">Send message</button>
                        <button type="button" className="btn btn-outline-secondary">Schedule consult</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <h5>Contact Info</h5>
                <p className="text-muted">
                  Phone: +1 888 318 MJ<br/>
                  Address: 340 King Street East, Toronto, ON<br/>
                  Email: hello@mjweb.design
                </p>

                <h6>Follow Us</h6>
                <div className="d-flex gap-2">
                  <a className="btn btn-outline-secondary btn-sm">Twitter</a>
                  <a className="btn btn-outline-secondary btn-sm">LinkedIn</a>
                  <a className="btn btn-outline-secondary btn-sm">Instagram</a>
                </div>

                <p className="mt-4 small text-muted">MJ builds websites that convert visitors into customers without the overbilling or fuss.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 d-flex align-items-start gap-3">
              <div
                className="rounded d-flex align-items-center justify-content-center text-white fw-bold"
                style={{ width: 44, height: 44, background: "linear-gradient(135deg,#6366f1,#ec4899)" }}
              >
                MJ
              </div>
              <div>
                <div className="fw-bold">MJ Web Design</div>
                <div className="small text-muted">Complete Web Design &amp; Development</div>
                <p className="small text-muted mt-2">MJ empowers business owners with websites that strengthen brand identity and increase engagement.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <h6>Services</h6>
              <ul className="list-unstyled small text-muted">
                <li>Web Design</li>
                <li>E-commerce</li>
                <li>SEO</li>
                <li>PPC</li>
              </ul>
            </div>

            <div className="col-md-4 mb-3">
              <h6>Contact</h6>
              <div className="small text-muted">+1 888 318 MJ<br/>hello@mjweb.design</div>
              <div className="mt-3 small text-muted">© MJ Web Design 2013-2025</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- Small subcomponents --- */
function ServiceCard({ title, desc }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ title, price, features, highlight }) {
  return (
    <div className="col-md-4">
      <div className={`card h-100 ${highlight ? "border-primary" : ""} shadow-sm`}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <h3 className="fw-bold">{price}</h3>
          <ul className="list-unstyled mt-3 mb-4 text-muted">
            {features.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>
          <div className="mt-auto">
            <a className="btn btn-outline-primary w-100">Choose</a>
          </div>
        </div>
      </div>
    </div>
  );
}
