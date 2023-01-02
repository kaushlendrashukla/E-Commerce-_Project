import React, { Fragment , useContext} from "react";
import { Container, Navbar, Nav, FormControl, Button } from "react-bootstrap"
import CartIconButton from "../Cart/CartIconButton";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css"
import AuthContext from "../../Authentication/AuthContext";
const Header = props => {
  
  const authCtx = useContext(AuthContext)
  const logoutHandler = () =>{ authCtx.logout()}
  const isLoggedIn = authCtx.isLoggedIn;
  return (
   
    <div>

      <Navbar style={{ backgroundColor: "#131921" }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand  ><h1>Shukla Stores</h1></Navbar.Brand>
        
            <Navbar.Text className="search">
              <FormControl style={{ width: 500 }} placeholder="Search for product" className="m-auto">
              </FormControl>
            </Navbar.Text>
          
        { isLoggedIn && <CartIconButton onClick={props.onShowCart}/>}
       { !isLoggedIn &&   <NavLink className="login" to='/login'>Login</NavLink>}
          {/* <NavLink className="logout" to='/logout'>Logout</NavLink> */}
          {  isLoggedIn && 
            <button className={classes.button} onClick={logoutHandler}>Logout</button>
          }
        </Container>

      </Navbar>
     
        <Navigation />
    

    </div>
  )
}

export default Header;