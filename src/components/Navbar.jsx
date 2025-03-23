import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample() {
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container fluid className="px-3 d-flex align-items-center justify-content-between">
        {/* Left Section - Brand & Location */}
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home" className="fw-bold me-3">GlamWear</Navbar.Brand>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#home" className="d-flex align-items-center gap-1">
              <IoLocationOutline />
              Delivering To Bengaluru
            </Nav.Link>
          </Nav>
        </div>

        {/* Middle Section - Search Bar
        <div className="d-flex align-items-center search-container" style={{ maxWidth: "400px", width: "100%", position: "relative" }}>
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search..."
            style={{ paddingRight: "40px" }}
          />
          <FaSearch className="search-icon" style={{ position: "absolute", right: "10px", cursor: "pointer" }} />
        </div> */}

        {/* Right Section - Profile Icon & Dropdown */}
        <Nav>
          <NavDropdown
            title={
              <span className="d-flex align-items-center gap-1">
                <CgProfile size={24} />
                <span>Profile</span>
              </span>
            }
            id="basic-nav-dropdown"
            align="end"
            className="custom-dropdown"
          >
            <NavDropdown.Item href="#profile">My Account</NavDropdown.Item>
            <NavDropdown.Item href="#orders">Orders</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>

      {/* Custom CSS to Fix Arrow Issue */}
      <style>
        {`
          .custom-dropdown .dropdown-toggle::after {
            display: none !important; /* Hides the default Bootstrap arrow */
          }
        `}
      </style>
    </Navbar>
  );
}

export default BasicExample;
