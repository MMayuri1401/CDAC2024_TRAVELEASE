import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import UserReg from "./component/UserReg";
import UserLogin from "./component/UserLogin";
import AdminLogin from "./component/AdminLogin";
import AdminHome from "./component/AdminHome";
import Events from "./component/Events";
import UserMaster from "./component/UserMaster";
import AddEvent from "./component/AddEvent";
import Guide from "./component/Guide";
import AddGuide from "./component/AddGuide";
import EditGuide from "./component/EditGuide";
import Vehicle from "./component/Vehicle";
import AddVehicle from "./component/AddVehicle";   
import EditVehicle from "./component/EditVehicle";
import Hotels from "./component/Hotels";
import AddHotel from "./component/AddHotel";
import EditHotel from "./component/EditHotel";
import UserHome from "./component/UserHome";
import BookEvent from "./component/BookEvent";
import ConfirmBooking from "./component/ConfirmBooking";
import MyBookings from "./component/MyBookings";
import Profile from "./component/Profile";
import BookingMaster from "./component/BookingMaster";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userreg" element={<UserReg />} />
        <Route path="userlogin" element={<UserLogin />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="adminhome" element={<AdminHome />} />
        <Route path="events" element={<Events />} />
        <Route path="AddEvent" element={<AddEvent />} />
        <Route path="UserMaster" element={<UserMaster />} />
        <Route path="Guide" element={<Guide />} />
        <Route path="AddGuide" element={<AddGuide />} />
        <Route path="EditGuide" element={<EditGuide />} />
        <Route path="Vehicle" element={<Vehicle />} />
        <Route path="AddVehicle" element={<AddVehicle />} />
        <Route path="EditVehicle" element={<EditVehicle />} />
        <Route path="Hotels" element={<Hotels />} />
        <Route path="AddHotel" element={<AddHotel />} />
        <Route path="EditHotel" element={<EditHotel />} />
        <Route path="UserHome" element={<UserHome />} />
        <Route path="BookEvent" element={<BookEvent />} />
        <Route path="ConfirmBooking" element={<ConfirmBooking />} />
        <Route path="MyBookings" element={<MyBookings />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="BookingMaster" element={<BookingMaster />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
