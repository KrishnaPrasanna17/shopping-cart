import {Container, FormControl, Navbar, Nav, Badge, Dropdown} from "react-bootstrap";
import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";

function Header() {
    return (
        <Navbar bg = "dark" variant = "dark" style = {{height: 80}}>
            <Container>
              <Navbar.Brand>
                  <Link to = "/">Shopping Cart</Link>
              </Navbar.Brand>
              <Navbar.Text class = 'search'>
                  <FormControl
                  style = {{width: 500}}
                  placeholder = "Search a product"
                  className="m-auto"
                  />
              </Navbar.Text>
              <Nav>
              <Dropdown alignRight>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"> {/*toggle is the button here */}
                     <FaShoppingCart color = "white" fontSize = "25px" />
                         <Badge>{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style = {{ minWidth: 370}}>
                        <span style = {{ padding : 10}}>Cart is Empty</span>
                    </Dropdown.Menu>
                    </Dropdown>
              </Nav>
            </Container>
            
        </Navbar>
    )
}

export default Header
