import React from 'react';

const Teacher = () => {
  return (
   
    <section className="teachers py-5 text-center">
    <div className="container">
        <h2 className="section-title">Our Teachers</h2>
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <img src="img/teacher_2.png" className="card-img-top" alt="Sarah Johnson"/>
                    <div className="card-body">
                        <h5 className="card-title">Sarah Johnson</h5>
                        <p>Mathematics Teacher</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <img src="img/teacher_1.png" className="card-img-top" alt="David Lee"/>
                    <div className="card-body">
                        <h5 className="card-title">David Lee</h5>
                        <p>Literature Teacher</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <img src="img/teacher_3.png" className="card-img-top" alt="Emily Brown"/>
                    <div className="card-body">
                        <h5 className="card-title">Emily Brown</h5>
                        <p>Chemistry Teacher</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <img src="img/teacher_4.png" className="card-img-top" alt="John Smith"/>
                    <div className="card-body">
                        <h5 className="card-title">John Smith</h5>
                        <p>History Teacher</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
};

export default Teacher;