import React from 'react';

const Hero = () => {
  return (
    <section 
      className="hero d-flex align-items-center text-center text-white" 
      id="home"
    >
      <div className="hero-background">
        <img src="img/dcu.jpg" alt="School Building" className="img-fluid"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Welcome to Our School</h1>
        <p>A vibrant learning community for future leaders.</p>
        <a href="#" className="btn btn-primary">
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Hero;