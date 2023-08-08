import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Dropdown } from "react-bootstrap";

const Header = (props) => {
  const [login, setLogin] = useState(true);
  return (
    <Navbar bg="light" expand="lg" className="z-1 w-100">
      <div className="d-flex flex-row  px-4 py-2 w-100 justify-content-between align-items-center">
        <div>
          <Navbar.Brand href="#home" className="fw-bold">
            TRIP PLANNER
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              {!login ? (
                <>
                  <Nav.Link href="#link">
                    <Button variant="outline-dark">Register</Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Button variant="outline-dark">Login</Button>
                  </Nav.Link>
                </>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <AccountCircleIcon fontSize="large" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">My Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
