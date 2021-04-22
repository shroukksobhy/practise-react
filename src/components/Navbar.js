import React from "react";
import * as ReactBootStrap from 'react-bootstrap';
function Navbar() {
  return (

    <div>
      <ReactBootStrap.Navbar bg="dark" expand="lg">
        <ReactBootStrap.Navbar.Brand href="#home"><i class="fab fa-github fa-lg	"></i></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Pull requests</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Issues</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#home">Marketplace</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Explore</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Form inline>
            <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
          </ReactBootStrap.Form>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div >
  );
}

export default Navbar;
