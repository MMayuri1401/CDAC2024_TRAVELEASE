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

class BookEvent extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
      eventsTable: [],
      selectedEvent: "",
      selectedEventName: "",
      selectedGuide: "",
      selectedGuideName: "",
      guide: [],
      guideData: [],
      selectedVehicle: "",
      selectedVehicleName: "",
      vehicle: [],
      vehicleData: [],
      endDate: "",
      startDate: "",
      adult: "",
      child: "",
      total_price: "0",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onGuideChange = this.onGuideChange.bind(this);
    this.onVehicleChange = this.onVehicleChange.bind(this);
    //this.addProduct = this.addProduct.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.generateOrder = this.generateOrder.bind(this);
    this.date_diff_indays = this.date_diff_indays.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    // this.validation = this.validation.bind(this);
  }
  generateOrder() {
    if (this.validation()) {
      let total = this.calculateTotal();
      fetch("http://localhost:8085/addBooking", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        crossorigin: true,
        body: JSON.stringify({
          bookingDate: new Date().toLocaleString(),
          custId:sessionStorage.getItem("uid"),
          eventId: this.state.selectedEvent,
          eventName: this.state.selectedEventName,
          guideName: this.state.selectedGuideName,
          vehicleName: this.state.selectedVehicleName,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          adults: this.state.adult,
          childs: this.state.child,
          totalPrice: total,
          status: "Pending",
        }),
      })
        .then((Response) => Response.json())
        .then((result) => {
          window.location = "/confirmBooking?id=" + result.bookingId;
        });
    }
  }
  onSubmit(event) {
    if (this.validation()) {
      event.preventDefault();
      debugger;
      this.calculateTotal();
      const tempData = {
        product_id: this.state.productTempData.product_Id,
        product_name: this.state.productTempData.product_Name,
        quantity: this.state.quantity,
        total_price: (
          parseInt(this.state.productTempData.product_Price) *
          parseInt(this.state.quantity)
        ).toString(),
      };
      let { orderData } = this.state;
      orderData.push(tempData);
      this.setState({ orderData: orderData, quantity: "", selectedProd: "" });
    }
  }
  validation() {
    return true;
  }
  componentDidMount() {
    axios
      .get("http://localhost:8085/events")
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:8085/guides")
      .then((response) => {
        this.setState({ guide: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:8085/vehicles")
      .then((response) => {
        this.setState({ vehicle: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      selectedEvent: e.target.value,
      selectedEventName: e.target.options[e.target.selectedIndex].text,
      products: [],
      eventsTable: [],
      orderData: [],
      quantity: "",
    });
    axios
      .get("http://localhost:8085/GetEventById/" + e.target.value)
      .then((response) => {
        debugger;
        this.setState({ eventsTable: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onGuideChange(e) {
    this.setState({
      selectedGuide: e.target.value,
      selectedGuideName: e.target.options[e.target.selectedIndex].text,
      guideData: [],
    });
    axios
      .get("http://localhost:8085/GetGuideById/" + e.target.value)
      .then((response) => {
        debugger;
        this.setState({ guideData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onVehicleChange(e) {
    this.setState({
      selectedVehicle: e.target.value,
      selectedVehicleName: e.target.options[e.target.selectedIndex].text,
      vehicleData: [],
    });
    axios
      .get("http://localhost:8085/GetVehicleById/" + e.target.value)
      .then((response) => {
        debugger;
        this.setState({ vehicleData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  date_diff_indays(date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  }

  calculateTotal() {
    debugger;
    let total = 0;
    let dateDiff = this.date_diff_indays(
      this.state.startDate,
      this.state.endDate
    );
    if (dateDiff == 0 || isNaN(dateDiff)) {
      dateDiff = 1;
    }

    total += this.state.eventsTable.adultPrice * this.state.adult * dateDiff;

    total += this.state.eventsTable.childPrice * this.state.child * dateDiff;

    total +=
      Number(this.state.total_price) + Number(this.state.guideData.guidePrice);

    total +=
      Number(this.state.total_price) +
      Number(this.state.vehicleData.vehicleRate);

    return total;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
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
                  <a className="nav-link active" href="/BookEvent">
                    Book Event
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/MyBookings">
                    My Bookings
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/Profile">
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
        <div className="d-flex align-items-center topMargin">
          <Container>
            <Row className="justify-content-center">
              <Col>
                <CardGroup>
                  <Card className="p-2">
                    <CardBody>
                      <h1>
                        <center>Book Event</center>
                      </h1>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="6" lg="6" xl="6">
                <CardGroup>
                  <Card className="p-2">
                    <CardBody>
                      <Form className="form" onSubmit={this.onSubmit}>
                        <div className="row mb-3">
                          <label className="col-sm-4">Event Name</label>
                          <div className="col-sm-8">
                            <select
                              className="form-select form-select-sm"
                              value={this.state.selectedEvent}
                              onChange={this.onChangeName}
                            >
                              <option>Select Event</option>
                              {this.state.events.map((item) => (
                                <option value={item.eventId} key={item.eventId}>
                                  {item.eventName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-4">Guide Name</label>
                          <div className="col-sm-8">
                            <select
                              className="form-select form-select-sm"
                              value={this.state.selectedGuide}
                              onChange={this.onGuideChange}
                            >
                              <option>Select Guide</option>
                              {this.state.guide.map((item) => (
                                <option value={item.guideId} key={item.guideId}>
                                  {item.guideName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-4">Vehicle</label>
                          <div className="col-sm-8">
                            <select
                              className="form-select form-select-sm"
                              value={this.state.selectedVehicle}
                              onChange={this.onVehicleChange}
                            >
                              <option>Select Vehicle</option>
                              {this.state.vehicle.map((item) => (
                                <option
                                  value={item.vehicleId}
                                  key={item.vehicleId}
                                >
                                  {item.vehicleName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-4">Start Date </label>
                          <div className="col-sm-8">
                            <Input
                              name="startDate"
                              type="date"
                              value={this.state.startDate}
                              onChange={this.handleChange}
                              placeholder="Start Date"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-4">End Date </label>
                          <div className="col-sm-8">
                            <Input
                              name="endDate"
                              type="date"
                              value={this.state.endDate}
                              onChange={this.handleChange}
                              placeholder="End Date"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-4">Adults </label>
                          <div className="col-sm-8">
                            <Input
                              name="adult"
                              type="text"
                              value={this.state.adult}
                              onChange={this.handleChange}
                              placeholder="No of Adults"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-4">Childs </label>
                          <div className="col-sm-8">
                            <Input
                              name="child"
                              type="text"
                              value={this.state.child}
                              onChange={this.handleChange}
                              placeholder="No of Childs"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <Col sm={3}></Col>
                          <Col sm={6}>
                            <center>
                              <Button
                                type="button"
                                color="success"
                                onClick={this.generateOrder}
                              >
                                Book
                              </Button>
                            </center>
                          </Col>
                          <Col sm={3}></Col>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
              <Col md="6" lg="6" xl="6">
                <CardGroup>
                  <Card className="p-2">
                    <CardBody>
                      <Form className="form">
                        <h5>Event Details</h5>
                        <div className="row">
                          <Col sm={12}>
                            <table
                              className="table table-striped"
                              style={{ marginTop: 10 }}
                            >
                              <thead className="table-dark tblHeader">
                                <tr>
                                  <th>Name</th>
                                  <th>Description</th>
                                  <th>Adult Price (For 1D & 1N)</th>
                                  <th>Child Price (For 1D & 1N)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr key={this.state.eventsTable.eventId}>
                                  <td>{this.state.eventsTable.eventName}</td>
                                  <td>{this.state.eventsTable.eventDesc}</td>
                                  <td>{this.state.eventsTable.adultPrice}</td>
                                  <td>{this.state.eventsTable.childPrice}</td>
                                </tr>
                              </tbody>
                            </table>
                          </Col>
                        </div>

                        <h5>Guide Details</h5>
                        <div className="row">
                          <Col sm={12}>
                            <table
                              className="table table-striped"
                              style={{ marginTop: 10 }}
                            >
                              <thead className="table-dark tblHeader">
                                <tr>
                                  <th>Name</th>
                                  <th>Adress</th>
                                  <th>Contact Number</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr key={this.state.guideData.guideId}>
                                  <td>{this.state.guideData.guideName}</td>
                                  <td>{this.state.guideData.guideAddress}</td>
                                  <td>{this.state.guideData.guideNumber}</td>
                                  <td>{this.state.guideData.guidePrice}</td>
                                </tr>
                              </tbody>
                            </table>
                          </Col>
                        </div>

                        <h5>Vehicle Details</h5>
                        <div className="row">
                          <Col sm={12}>
                            <table
                              className="table table-striped"
                              style={{ marginTop: 10 }}
                            >
                              <thead className="table-dark tblHeader">
                                <tr>
                                  <th>Vehicle Name</th>
                                  <th>Vehicle Number</th>
                                  <th>Total Seats</th>
                                  <th>Rate</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr key={this.state.vehicleData.vehicleId}>
                                  <td>{this.state.vehicleData.vehicleName}</td>
                                  <td>
                                    {this.state.vehicleData.vehicleNumber}
                                  </td>
                                  <td>{this.state.vehicleData.vehicleSeats}</td>
                                  <td>{this.state.vehicleData.vehicleRate}</td>
                                </tr>
                              </tbody>
                            </table>
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

export default BookEvent;
