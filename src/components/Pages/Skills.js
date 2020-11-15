import React, { Component } from 'react';

class Skills extends Component {

    render() {
        return (
            <div>
                 <section className="page-section portfolio" id="skills">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>

                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row justify-content-center">

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <img className="img-fluid" src="assets/img/portfolio/REACT.png" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <img className="img-fluid" src="assets/img/portfolio/nodejs.png" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <img className="img-fluid" src="assets/img/portfolio/html_js_css.png" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <img className="img-fluid" src="assets/img/portfolio/python.png" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <img className="img-fluid" src="assets/img/portfolio/dart.png" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <img className="img-fluid" src="assets/img/portfolio/sql.png" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal7">
                            <img className="img-fluid" src="assets/img/portfolio/java.png" alt="" />
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal8">
                            <img className="img-fluid" src="assets/img/portfolio/firebase.png" alt="" />
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal9">
                            <img className="img-fluid" src="assets/img/portfolio/c.png" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal9">
                            <img className="img-fluid" src="assets/img/portfolio/cplusplus.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

            </div>
        );
    }
}

export default Skills;