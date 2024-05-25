import React, { Component } from "react";
import { Link } from "react-router-dom";
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
class AddEvent extends Component {
  constructor() {
    super();

    this.state = {
      Name: "",
      Description: "",
      AdultPrice: "",
      ChildPrice: ""
    };

    this.Name = this.Name.bind(this);
    this.Description = this.Description.bind(this);
    this.AdultPrice = this.AdultPrice.bind(this);
    this.ChildPrice = this.ChildPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

  Name(event) {
    this.setState({ Name: event.target.value });
  }
  Description(event) {
    this.setState({ Description: event.target.value });
  }
  AdultPrice(event) {
    this.setState({ AdultPrice: event.target.value });
  }
  ChildPrice(event) {
    this.setState({ ChildPrice: event.target.value });
  }
  onSubmit(event) {
    debugger;
    if (this.validation()) {
      event.preventDefault();
      fetch("http://localhost:8085/addEvents", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        crossorigin: true,
        body: JSON.stringify({
            eventName: this.state.Name,
            eventDesc: this.state.Description,
            adultPrice: this.state.AdultPrice,
            childPrice: this.state.ChildPrice,
        }),
      })
        .then((Response) => Response.json())
        .then((result) => {
          alert('Event created successfully');
          window.location = "/events";
        });
    }
  }

  validation() {
    if (this.state.Name == "") {
      alert("Please enter Name");
      return false;
    } else if (this.state.Description == "") {
      alert("Please enter Description");
      return false;
    } else if (this.state.ChildPrice == "") {
      alert("Please enter Child Price");
      return false;
    } else if (this.state.AdultPrice == "") {
      alert("Please enter Adult Price");
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
                              <center>Add Event</center>
                            </h1>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Event Name</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              onChange={this.Name}
                              placeholder="Enter Event Name"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Event Description</label>
                          <div className="col-sm-8">
                            <Input
                              type="textarea"
                              row="3"
                              onChange={this.Description}
                              placeholder="Description"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Adult Price (For 1D & 1N)</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              onChange={this.AdultPrice}
                              placeholder="Adult Price"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Child Price  (For 1D & 1N)</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              onChange={this.ChildPrice}
                              placeholder="Child Price"
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
                            <Link to={"/events"} className="btn btn-danger">
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

export default AddEvent;
