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
class EditVehicle extends Component {
  constructor() {
    super();
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("id");
    this.state = {
      Id: term,
      vehicleName: "",
      vehicleNumber: "",
      vehicleSeats: "",
      vehicleRate: "",
    };

    this.vehicleName = this.vehicleName.bind(this);
    this.vehicleNumber = this.vehicleNumber.bind(this);
    this.vehicleSeats = this.vehicleSeats.bind(this);
    this.vehicleRate = this.vehicleRate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

  vehicleName(event) {
    this.setState({ vehicleName: event.target.value });
  }
  vehicleNumber(event) {
    this.setState({ vehicleNumber: event.target.value });
  }
  vehicleSeats(event) {
    this.setState({ vehicleSeats: event.target.value });
  }
  vehicleRate(event) {
    this.setState({ vehicleRate: event.target.value });
  }
  onSubmit(event) {
    debugger;
    if (this.validation()) {
      event.preventDefault();
      const obj = {
        vehicleId: this.state.Id,
        vehicleName: this.state.vehicleName,
        vehicleNumber: this.state.vehicleNumber,
        vehicleSeats: this.state.vehicleSeats,
        vehicleRate: this.state.vehicleRate,
      };

      fetch("http://localhost:8085/updateVehicle", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        crossorigin: true,
        body: JSON.stringify(obj),
      })
        .then((Response) => Response.json())
        .then((result) => {
          alert("Vehicle details updated successfully");
          window.location = "/Vehicle";
        });
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8085/GetVehicleById/" + this.state.Id)
      .then((response) => {
        debugger;
        this.setState({
          vehicleName: response.data.vehicleName,
          vehicleNumber: response.data.vehicleNumber,
          vehicleSeats: response.data.vehicleSeats,
          vehicleRate: response.data.vehicleRate,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  validation() {
    if (this.state.vehicleName == "") {
      alert("Please enter Name");
      return false;
    } else if (this.state.vehicleNumber == "") {
      alert("Please enter Number");
      return false;
    } else if (this.state.vehicleSeats == "") {
      alert("Please enter total seats");
      return false;
    } else if (this.state.vehicleRate == "") {
      alert("Please enter Rate");
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
                  <a className="nav-link active" href="/Vehicle">
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
                              <center>Edit Vehicle</center>
                            </h1>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Vehicle Name</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.vehicleName}
                              onChange={this.vehicleName}
                              placeholder="Enter Vehicle Name"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Vehicle Number</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.vehicleNumber}
                              onChange={this.vehicleNumber}
                              placeholder="Vehicle Number"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Total Seats</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.vehicleSeats}
                              onChange={this.vehicleSeats}
                              placeholder="Total Seats"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Rate</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.vehicleRate}
                              onChange={this.vehicleRate}
                              placeholder="Rate"
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
                            <Link to={"/Vehicle"} className="btn btn-danger">
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

export default EditVehicle;
