import React, { Component } from "react";
import "../css/user.css";
class UserHome extends Component {
  render() {
    return (
      <div className="section-bg">
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">TravelEase</h1>

            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a className="nav-link active" href="/userhome">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/BookEvent">
                    Book Event
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/MyBookings">
                    My Bookings
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/Profile">
                    Profile
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <a href="/" className="appointment-btn">
              Logout
            </a>
          </div>
        </header>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <h1>Welcome to TravelEase</h1>
            <h2>Discover Amazing Places With Us</h2>
          </div>
        </section>
      </div>
    );
  }
}
export default UserHome;
