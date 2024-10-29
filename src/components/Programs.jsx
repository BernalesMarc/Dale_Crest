import React from 'react';

const Programs = () => {
  return (
    <section className ="programs py-5 text-center" id="programs">
    <div className="container">
        <h2 className="section-title">Explore Our Programs</h2>
        <p>Discover innovative and engaging programs designed to enhance your learning experience.</p>
        <div className="row mt-4">

            <div className="col-md-4">
                <div className="card">
                    <img src="img/computer_science.jpg" className="card-img-top" alt="Computer Science"/>
                    <div className="card-body">
                        <h5 className="card-title">Computer Science</h5>
                        <p className="card-text">Dive into the world of coding, algorithms, and software development.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card">
                    <img src="img/business_administaration.jpg" className="card-img-top" alt="Business Administration"/>
                    <div className="card-body">
                        <h5 className ="card-title">Business Administration</h5>
                        <p className ="card-text">Develop essential skills in management, finance, and entrepreneurship.</p>
                        <a href="#" className ="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>

            <div className ="col-md-4">
                <div className ="card">
                    <img src="img/Fine_Arts.jpg" className="card-img-top" alt="Fine Arts"/>
                    <div className ="card-body">
                        <h5 className="card-title">Fine Arts</h5>
                        <p className="card-text">Express your creativity through diverse art forms and media.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" className="btn btn-primary mt-4">See All Programs</a>
    </div>
</section>
  );
};

export default Programs;