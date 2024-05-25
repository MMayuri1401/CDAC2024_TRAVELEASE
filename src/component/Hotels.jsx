import React, { Component } from "react";
import axios from "axios";
import "../css/style.css";
import { Link } from "react-router-dom";
export class Hotels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8085/hotels")
      .then((response) => {
        debugger;
        this.setState({ hotels: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  deleteClick(id) {
    axios
      .delete("http://localhost:8085/deletehotel/" + parseInt(id))
      .then((json) => {
        debugger;

        if (json.data == "Hotel removed") {
          alert("Hotel removed successfully");
          window.location = "/hotels";
        }
      });
  }
  render() {
    return (
      <div className="section-bg">
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">TravelEase</h1>

            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a className="nav-link" href="/adminhome">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/UserMaster">
                    Customers
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/Events">
                    Events
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/Guide">
                    Guide
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/Vehicle">
                    Vehicle
                  </a>
                </li>
                <li>
                  <a className="nav-link active" href="/Hotels">
                    Hotels
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/BookingMaster">
                    Bookings
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
        <section id="main" className="d-flex align-items-center topMargin">
          <div className="container">
            <div>
              <h4 align="center">Hotel Master</h4>
              <Link to={"/AddHotel"} className="btn btn-success btnAdd">
                Add
              </Link>
              <table className="table table-striped" style={{ marginTop: 10 }}>
                <thead className="table-dark tblHeader">
                  <tr>
                    <th>Hotel Name</th>
                    <th>Hotel Number</th>
                    <th>Location</th>                   
                    <th>Hotel Details</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.hotels.map((item) => (
                    <tr key={item.hotelId}>
                      <td>{item.hotelName}</td>
                      <td>{item.hotelNumber}</td>
                      <td>{item.hotelLocation}</td>
                      <td>{item.hotelDetails}</td>
                      <td>
                        <Link
                          to={"/editHotel?id=" + item.hotelId}
                          className="btn btn-success"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => this.deleteClick(item.hotelId)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </button>
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hotels;
