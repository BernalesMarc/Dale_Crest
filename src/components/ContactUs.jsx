import React from 'react';

const Contact = () => {
  return (
    <section className="contact-us py-5 bg-light" id="contact">
      <div className="container">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="name" className="mb-2">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter your name" 
                  required
                />
              </div>
              
              <div className="form-group mb-3">
                <label htmlFor="email" className="mb-2">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email" 
                  required
                />
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="message" className="mb-2">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="4" 
                  placeholder="Write your message here" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;