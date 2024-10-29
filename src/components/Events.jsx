import React from 'react';

const Event = () => {
  return (
   
    <section className ="events py-5">
    <div className="container text-center">
        <h2 className="section-title">Upcoming Events</h2>
        <p>Join us in our exciting upcoming school events!</p>
        <div className="row">

            <div className="col-md-4">
                <div className="card">
                    <img src="img/Sc_fair.jpg" className="card-img-top" alt="Science Fair"/>
                    <div className="card-body">
                        <h5 className="card-title">Science Fair</h5>
                        <p>Date: Nov 12, 2023</p>
                        <a href="#" className="btn btn-primary">See Details</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <img src="img/code_fest.jpg" className="card-img-top" alt="Winter Concert"/>
                    <div className="card-body">
                        <h5 className="card-title">Code Fest</h5>
                        <p>Date: Dec 5, 2023</p>
                        <a href="#" className="btn btn-primary">See Details</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <img src="img/battle_of_the_bands.jpg" className="card-img-top" alt="Sports Gala"/>
                    <div className="card-body">
                        <h5 className="card-title">Battle Of The Bands</h5>
                        <p>Date: Jan 20, 2024</p>
                        <a href="#" className="btn btn-primary">See Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
};

export default Event;