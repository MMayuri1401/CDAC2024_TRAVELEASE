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
class AddGuide extends Component {
  constructor() {
    super();

    this.state = {
      Name: "",
      Address: "",
      ContactNo: "",
      Price: ""
    };

    this.Name = this.Name.bind(this);
    this.Address = this.Address.bind(this);
    this.ContactNo = this.ContactNo.bind(this);
    this.Price = this.Price.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

  Name(event) {
    this.setState({ Name: event.target.value });
  }
  Address(event) {
    this.setState({ Address: event.target.value });
  }
  ContactNo(event) {
    this.setState({ ContactNo: event.target.value });
  }
  Price(event) {
    this.setState({ Price: event.target.value });
  }
  onSubmit(event) {
    debugger;
    if (this.validation()) {
      event.preventDefault();
      fetch("http://localhost:8085/addGuide", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        crossorigin: true,
        body: JSON.stringify({
            guideName: this.state.Name,
            guideAddress: this.state.Address,
            guideNumber: this.state.ContactNo,
            guidePrice: this.state.Price,
        }),
      })
        .then((Response) => Response.json())
        .then((result) => {
          alert('Guide added successfully');
          window.location = "/guide";
        });
    }
  }

  validation() {
    if (this.state.Name == "") {
      alert("Please enter Name");
      return false;
    } else if (this.state.Address == "") {
      alert("Please enter Address");
      return false;
    } else if (this.state.ContactNo == "") {
      alert("Please enter Contact No");
      return false;
    } else if (this.state.Price == "") {
      alert("Please enter Price");
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
                  <a className="nav-link active" href="/Guide">
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
                              <center>Add Guide</center>
                            </h1>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Guide Name</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              onChange={this.Name}
                              placeholder="Enter Guide Name"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Guide Address</label>
                          <div className="col-sm-8">
                            <Input
                              type="textarea"
                              row="3"
                              onChange={this.Address}
                              placeholder="Address"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Mobile Number</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              onChange={this.ContactNo}
                              placeholder="Mobile Number"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Price</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              onChange={this.Price}
                              placeholder="Price"
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
                            <Link to={"/guide"} className="btn btn-danger">
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

export default AddGuide;
