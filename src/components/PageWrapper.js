import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component {

    render() {
        return (
        <div>
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">Shay Profile</Link>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/skills">Skills</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/about">About Me</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/contact">Contact</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://smallpdf.com/result#r=88383cbdb72f6c662b54204c307f13a2&t=share-document">Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {this.props.children}
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Israel, Ashdod
                            <br />
                        </p>
                    </div>
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Social Media</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/shay.manasherov.1/"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://wa.me/$+972546578357/"><i className="fab fa-fw fa-whatsapp"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/shay-manasherov-75a10a194/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/shaymanasherov"><i className="fab fa-fw fa-github"></i></a>
                    </div>
                </div>
            </div>
        </footer>
        </div>
        );
    }
}

export default PageWrapper;