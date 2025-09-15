import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white bg-opacity-75 backdrop-blur shadow-sm sticky-top py-3">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-semibold fs-4 text-primary" href="#home">
          <span className="text-dark">MJ</span> Web Design
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-3">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link text-dark fw-medium position-relative link-hover" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional styles for hover effects */}
      <style jsx>{`
        .nav-link.link-hover::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #0d6efd;
          transition: width 0.3s ease;
        }

        .nav-link.link-hover:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </nav>
  );
};

export default Header;
