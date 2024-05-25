import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
class EditHotel extends Component {
  constructor() {
    super();
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("id");
    this.state = {
      Id: term,
      hotelName: "",
      hotelNumber: "",
      hotelLocation: "",
      hotelDetails: "",
    };

    this.hotelName = this.hotelName.bind(this);
    this.hotelNumber = this.hotelNumber.bind(this);
    this.hotelLocation = this.hotelLocation.bind(this);
    this.hotelDetails = this.hotelDetails.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

  hotelName(event) {
    this.setState({ hotelName: event.target.value });
  }
  hotelNumber(event) {
    this.setState({ hotelNumber: event.target.value });
  }
  hotelLocation(event) {
    this.setState({ hotelLocation: event.target.value });
  }
  hotelDetails(event) {
    this.setState({ hotelDetails: event.target.value });
  }
  onSubmit(event) {
    debugger;
    if (this.validation()) {
      event.preventDefault();
      const obj = {
        hotelId: this.state.Id,
        hotelName: this.state.hotelName,
        hotelNumber: this.state.hotelNumber,
        hotelLocation: this.state.hotelLocation,
        hotelDetails: this.state.hotelDetails,
      };

      fetch("http://localhost:8085/updateHotel", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        crossorigin: true,
        body: JSON.stringify(obj),
      })
        .then((Response) => Response.json())
        .then((result) => {
          alert("Hotel details updated successfully");
          window.location = "/Hotels";
        });
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8085/GetHotelById/" + this.state.Id)
      .then((response) => {
        debugger;
        this.setState({
          hotelName: response.data.hotelName,
          hotelNumber: response.data.hotelNumber,
          hotelLocation: response.data.hotelLocation,
          hotelDetails: response.data.hotelDetails,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  validation() {
    if (this.state.hotelName == "") {
      alert("Please enter Name");
      return false;
    } else if (this.state.hotelNumber == "") {
      alert("Please enter Number");
      return false;
    } else if (this.state.hotelLocation == "") {
      alert("Please enter Location");
      return false;
    } else if (this.state.hotelDetails == "") {
      alert("Please enter Details");
      return false;
    } else {
      return true;
    }
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
        <div className="d-flex align-items-center topMargin">
          <Container>
            <Row className="justify-content-center">
              <Col md="9" lg="9" xl="9">
                <CardGroup>
                  <Card className="p-2">
                    <CardBody>
                      <Form className="form" onSubmit={this.onSubmit}>
                        <div className="row mb-2 pageheading">
                          <div className="col-sm-12">
                            <h1>
                              <center>Edit Hotel</center>
                            </h1>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Hotel Name</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.hotelName}
                              onChange={this.hotelName}
                              placeholder="Enter Hotel Name"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Hotel Number</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.hotelNumber}
                              onChange={this.hotelNumber}
                              placeholder="Hotel Number"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Hotel Location</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.hotelLocation}
                              onChange={this.hotelLocation}
                              placeholder="Hotel Location"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Description</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.hotelDetails}
                              onChange={this.hotelDetails}
                              placeholder="Description"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <Col sm={3}></Col>
                          <Col sm={3}>
                            <Button type="submit" color="success">
                              Submit
                            </Button>{" "}
                          </Col>
                          <Col sm={3}>
                            <Link to={"/Hotels"} className="btn btn-danger">
                              Cancel
                            </Link>
                          </Col>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default EditHotel;
