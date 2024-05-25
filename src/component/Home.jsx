import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/about.jpg";
import c1 from "../img/carousel-1.jpg";
import c2 from "../img/carousel-2.jpg";
import a1 from "../img/about-1.jpg";
import a2 from "../img/about-2.jpg";

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <>
          {/* Topbar Start */}
          <div className="container-fluid bg-light pt-3 d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                  <div className="d-inline-flex align-items-center">
                    <p>
                      <i className="fa fa-envelope mr-2" />
                      info@example.com
                    </p>
                    <p className="text-body px-3">|</p>
                    <p>
                      <i className="fa fa-phone-alt mr-2" />
                      +012 1111 11111
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                  <div className="d-inline-flex align-items-center">
                    <a className="text-primary px-3" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="text-primary px-3" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="text-primary px-3" href="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="text-primary px-3" href="">
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="text-primary pl-3" href="">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}
          {/* Navbar Start */}
          <div className="container-fluid position-relative nav-bar p-0">
            <div
              className="container-lg"
              style={{ zIndex: 9 }}
            >
              <div className="shadow-lg row">
                <a href="/" className="navbar-brand col-5">
                  <h1 className="m-0 text-primary">
                    <span className="text-dark">TRAVEL</span>EASE
                  </h1>
                </a>
                <div className="col-4"></div>
                <div className="col-1">
                <a href="/UserLogin" className="btn btn-primary" style={{float:"right"}}>
                    Login
                  </a>
                </div>
                <div className="col-1">
                  <a href="/UserReg" className="btn btn-primary" style={{float:"right",margin:"0px,20px,0px,0px"}}>
                    SignUp
                  </a> 
                </div>
              </div>
            </div>
          </div>
          {/* Navbar End */}
          {/* Carousel Start */}
          <div className="container-fluid p-0" style={{marginTop:"5%"}}>
            <div
              id="header-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="w-100" src={c1} alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 900 }}>
                      <h4 className="text-white text-uppercase mb-md-3">
                        Tours &amp; Travel
                      </h4>
                      <h1 className="display-3 text-white mb-md-4">
                        Let's Discover The World Together
                      </h1>
                      <a
                        href="/UserReg"
                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="w-100" src={c2} alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 900 }}>
                      <h4 className="text-white text-uppercase mb-md-3">
                        Tours &amp; Travel
                      </h4>
                      <h1 className="display-3 text-white mb-md-4">
                        Discover Amazing Places With Us
                      </h1>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel End */}

          {/* About Start */}
          <div className="container-fluid py-5">
            <div className="container pt-5">
              <div className="row">
                <div className="col-lg-6" style={{ minHeight: 500 }}>
                  <div className="position-relative h-100">
                    <img
                      className="position-absolute w-100 h-100"
                      src={logo}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                  <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                    <h6
                      className="text-primary text-uppercase"
                      style={{ letterSpacing: 5 }}
                    >
                      About Us
                    </h6>
                    <h1 className="mb-3">
                      We Provide Best Tour Packages In Your Budget
                    </h1>
                    <p>
                      In today's fast-paced world, travel management is fraught
                      with inefficiencies and complexities that hinder the
                      seamless exploration of our global landscape. Despite
                      technological advancements, travellers often encounter
                      challenges such as fragmented booking processes, limited
                      access to reliable transportation, and inadequate support
                      for health-related concerns and also for limited known
                      places
                    </p>
                    <div className="row mb-4">
                      <div className="col-6">
                        <img className="img-fluid" src={a1} alt="" />
                      </div>
                      <div className="col-6">
                        <img className="img-fluid" src={a2} alt="" />
                      </div>
                    </div>
                    <a href="/UserReg" className="btn btn-primary mt-1">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
        </>
      </div>
    );
  }
}

export default Home;
