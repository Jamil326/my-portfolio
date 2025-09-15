import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center py-5 bg-light"
      style={{ minHeight: '90vh' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Column */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold text-dark mb-4">
              COMPLETE WEB DESIGN & DEVELOPMENT
            </h1>
            <p className="lead text-secondary mb-4">
              Say goodbye to sleepless nights over counterproductive communications with service providers, and no more overbilling nightmares for services you’re not even sure you need — but somehow still have to pay for.
            </p>
            <a href="#services" className="btn btn-primary btn-lg px-4">
              Explore Services
            </a>
          </div>

          {/* Image or Visual Column */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://via.placeholder.com/500x350.png?text=Your+Design+Here"
              alt="Web Development"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
