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
  Label,
  Row,
} from "reactstrap";
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
class Profile extends Component {
  constructor() {
    super();

    this.state = {
      Id: sessionStorage.getItem("uid"),
      Name: "",
      User_Addr: "",
      EmailId: "",
      Password: "",
      GST_No: "",
      Telephone: "",
      Web_Addr: "",
      Contact_Person: "",
    };

    this.Name = this.Name.bind(this);
    this.User_Addr = this.User_Addr.bind(this);
    this.EmailId = this.EmailId.bind(this);
    this.Password = this.Password.bind(this);
    this.Telephone = this.Telephone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

  Name(event) {
    this.setState({ Name: event.target.value });
  }
  User_Addr(event) {
    this.setState({ User_Addr: event.target.value });
  }
  EmailId(event) {
    this.setState({ EmailId: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }
  Telephone(event) {
    this.setState({ Telephone: event.target.value });
  }

  onSubmit(event) {
    if (this.validation()) {
      event.preventDefault();
      fetch("http://localhost:8085/updateCustomer", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        crossorigin: true,
        body: JSON.stringify({
          custId: this.state.Id,
          custName: this.state.Name,
          emailId: this.state.EmailId,
          custAddress: this.state.User_Addr,
          mobileNo: this.state.Telephone,
          password: this.state.Password,
        }),
      })
        .then((Response) => Response.json())
        .then((result) => {
          console.log(result);
          if (result.custId != "") {
            alert("Profile updated successfully");
            
          } else {
            alert("Something went wrong");
          }
        });
    }
  }

  validation() {
    debugger;
    if (this.state.Name == "") {
      alert("Please enter Name");
      return false;
    } else if (this.state.EmailId == "") {
      alert("Please enter Email Id");
      return false;
    } else if (!isEmail(this.state.EmailId)) {
      alert("Please enter valid Email Id");
      return false;
    } else if (this.state.User_Addr == "") {
      alert("Please enter the Address");
      return false;
    } else if (this.state.Telephone == "") {
      alert("Please enter the Mobile Number");
      return false;
    } else if (this.state.Password == "") {
      alert("Please enter the Password");
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8085/GetCustomerById/" + this.state.Id)
      .then((response) => {
        debugger;

        this.setState({
          Name: response.data.custName,
          User_Addr: response.data.custAddress,
          EmailId: response.data.emailId,
          Telephone: response.data.mobileNo,
          Password: response.data.password,
        });
      })
      .catch(function (error) {
        console.log(error);
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
                  <a className="nav-link" href="/userhome">
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
                  <a className="nav-link active" href="/Profile">
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
        <section id="main" className="d-flex align-items-center topMargin">
          <Container>
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <CardGroup>
                  <Card className="p-2">
                    <CardBody>
                      <Form className="form" onSubmit={this.onSubmit}>
                        <div className="row mb-2 pageheading">
                          <div className="col-sm-12">
                            <h1>
                              <center>Profile</center>
                            </h1>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Name</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.Name}
                              onChange={this.Name}
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Email Id</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.EmailId}
                              readOnly={true}
                              onChange={this.EmailId}
                              placeholder="Email Id"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Address</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.User_Addr}
                              onChange={this.User_Addr}
                              placeholder="Address"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-4">Mobile Number</label>
                          <div className="col-sm-8">
                            <Input
                              type="text"
                              value={this.state.Telephone}
                              onChange={this.Telephone}
                              placeholder="Mobile Number"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-4">Password</label>
                          <div className="col-sm-8">
                            <Input
                              type="password"
                              value={this.state.Password}
                              onChange={this.Password}
                              placeholder="Password"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <Col sm={4}></Col>
                          <Col sm={4}>
                            <Button type="submit" color="success">
                              Update
                            </Button>
                          </Col>
                          <Col sm={4}></Col>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Profile;
