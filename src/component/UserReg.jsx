import React, { Component } from "react";
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
class UserReg extends Component {
  constructor() {
    super();

    this.state = {
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

    this.signup = this.signup.bind(this);
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

  signup(event) {
    debugger;
    if (this.validation()) {
      event.preventDefault();
      fetch("http://localhost:8085/addCustomer", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        crossorigin: true,
        body: JSON.stringify({
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
            alert("User registered successfully");
            window.location="/userlogin"
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

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <CardGroup>
                <Card className="p-2">
                  <CardBody>
                    <Form>
                      <div className="row mb-2 pageheading">
                        <div className="col-sm-12">
                          <h1>
                            <center>User Registration</center>
                          </h1>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-4">Name</label>
                        <div className="col-sm-8">
                          <Input
                            type="text"
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
                            onChange={this.Password}
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <Button onClick={this.signup} color="success" block>
                        Register
                      </Button>
                      <a href="/UserLogin">Login here</a>
                      <a href="/" style={{ float: "right" }}>
                        Home
                      </a>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserReg;
