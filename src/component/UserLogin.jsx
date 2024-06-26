import React, { Component } from "react";
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
import UserSession from './UserSession';
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
class UserLogin extends Component {
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
    } else if (!isEmail(this.state.Email)) {
      alert("Please enter valid Email Id");
    } else if (this.state.Password == "") {
      alert("Please enter the Password");
    } else {
      event.preventDefault();
      fetch("http://localhost:8085/userlogin", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        crossorigin: true,
        body: JSON.stringify({
          emailId: this.state.Email,
          password: this.state.Password,
        }),
      })
        .then((Response) => Response.text())
        .then((result) => {
          console.log(result);
          if (result == "Invalid") alert("Invalid User");
          else {
            sessionStorage.setItem("uid",result)
            window.location="/Userhome"
          }
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
                            <center>User Login</center>
                          </h1>
                        </div>
                      </div>
                      <InputGroup className="mb-3">
                        <Input
                          type="text"
                          onChange={this.Email}
                          placeholder="Enter Email"
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
                      Already have an account? <a href="UserReg">Register here.</a>
                      <a href="/" style={{float:"right"}}>Home</a>
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

export default UserLogin;
