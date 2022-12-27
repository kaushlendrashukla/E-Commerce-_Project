import React, { Fragment } from "react";
import { Container, Navbar, Nav, FormControl, Button } from "react-bootstrap"
import CartIconButton from "../Cart/CartIconButton";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
const Header = props => {
  return (
    <div>

      <Navbar style={{ backgroundColor: "#131921" }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand  ><h1>Shukla Stores</h1></Navbar.Brand>
        
            <Navbar.Text className="search">
              <FormControl style={{ width: 500 }} placeholder="Search for product" className="m-auto">
              </FormControl>
            </Navbar.Text>
          
          <CartIconButton onClick={props.onShowCart}/>
          <NavLink className="login" to='/login'>Login</NavLink>
        </Container>

      </Navbar>
     
        <Navigation />
    

    </div>
  )
}

export default Header;