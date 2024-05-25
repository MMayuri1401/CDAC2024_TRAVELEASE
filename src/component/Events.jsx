import React, { Component } from "react";
import axios from "axios";
import "../css/style.css";
import { Link } from "react-router-dom";
export class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      Id: 0,
      Name: "",
      EmailId: "",
      Distributor_Addr: "",
      GST_No: "",
      Telephone: "",
      Web_Addr: "",
      Contact_Person: "",
      Password: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8085/events")
      .then((response) => {
        debugger;
        this.setState({ events: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  deleteClick(id) {
    axios
      .delete(
        "http://localhost:8085/deleteevent/" +parseInt(id)
      )
      .then((json) => {
        debugger;
        
        if (json.data == "event removed") {
          alert('Event removed successfully');
          window.location = "/Events";
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
                  <a className="nav-link active" href="/Events">
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
                  <a className="nav-link" href="/Hotels">
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
              <h4 align="center">Event Master</h4>
              <Link to={"/addevent"} className="btn btn-success btnAdd">
                Add
              </Link>
              <table className="table table-striped" style={{ marginTop: 10 }}>
                <thead className="table-dark tblHeader">
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Adult Price (For 1D & 1N)</th>
                    <th>Child Price (For 1D & 1N)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.events.map((item) => (
                    <tr key={item.eventId}>
                      <td>{item.eventName}</td>
                      <td>{item.eventDesc}</td>
                      <td>{item.adultPrice}</td>
                      <td>{item.childPrice}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light mr-1"
                          onClick={() => this.deleteClick(item.eventId)}
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

export default Events;
