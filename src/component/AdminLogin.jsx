import React, { Component } from "react";
import axios from "axios";
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
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import UserSession from "./UserSession";

class AdminLogin extends Component {
  constructor() {
    super();

    this.state = {
      Email: "",
      Password: "",
    };

    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }
  login(event) {
    debugger;
    if (this.state.Email == "") {
      alert("Please enter Email Id");
    } else if (this.state.Password == "") {
      alert("Please enter the Password");
    } else {
      event.preventDefault();
      axios
        .get("http://localhost:8085/adminlogin/" + this.state.Email)
        .then((response) => {
          debugger;
          if (response.data.passWord == this.state.Password) {
            UserSession.setName(this.state.Email);
            sessionStorage.setItem("uid", this.state.Email);
            window.location = "/adminhome";
          } else {
            alert("Invalid User");
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      
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
                            <center>Admin Login</center>
                          </h1>
                        </div>
                      </div>
                      <InputGroup className="mb-3">
                        <Input
                          type="text"
                          onChange={this.Email}
                          placeholder="Enter Username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <Input
                          type="password"
                          onChange={this.Password}
                          placeholder="Enter Password"
                        />
                      </InputGroup>
                      <Button onClick={this.login} color="success" block>
                        Login
                      </Button>
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

export default AdminLogin;
