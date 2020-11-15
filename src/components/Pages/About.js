import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                        <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto"><p className="lead">My name is Shay, i'm a 4th-year Software Engineering Student.<br></br> Looking for my first position</p></div>
                            <div className="col-lg-4 mr-auto"><p className="lead">I am looking for a job with good vibes where I can express my skills and grow in it.
You are welcome to look at the attached projects and resume.
If you think there may be a match between us, feel free to contact me on the contact page. </p></div>
                        </div>
                    </div>
        </section>
            </div>
        );
    }
}

export default About;