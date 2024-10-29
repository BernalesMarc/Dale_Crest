import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <section className="testimonials py-5 text-center">
      <div className="container">
        <h2 className="section-title">Hear from our awesome users!</h2>
        <Carousel>
          <Carousel.Item>
            <p>"The teachers are incredibly supportive and inspiring."</p>
            <h5>Emily Johnson</h5>
          </Carousel.Item>
          <Carousel.Item>
            <p>"My child's confidence has grown tremendously."</p>
            <h5>Michael Smith</h5>
          </Carousel.Item>
          <Carousel.Item>
            <p>"A nurturing environment that fosters learning."</p>
            <h5>Sophia Martinez</h5>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
