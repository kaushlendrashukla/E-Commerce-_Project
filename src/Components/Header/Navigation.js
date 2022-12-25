import { Container, Navbar, Nav } from "react-bootstrap"
import classes from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    // return <Navbar style={{ marginRight: -98, marginLeft: -105 }} variant="dark">
        
      return(

          <div className={classes.header} >
         
               <div className={classes.box}> <NavLink to="/home">Home </NavLink> </div>
               <div className={classes.box}> <NavLink to="About" >About</NavLink> </div>  
               <div className={classes.box}> <NavLink to="store" >Store</NavLink></div>
               <div className={classes.box}> <Nav.Link href="#Children">Children</Nav.Link></div>
               <div className={classes.box}> <Nav.Link href="#Beauty">Beauty</Nav.Link></div>
               <div className={classes.box}> <Nav.Link href="#Shoes">Shoes</Nav.Link></div>
               <div className={classes.box}> <NavLink to="contact">Contact</NavLink></div>
             
               </div>
      )
              
    // </Navbar>

}
export default Navigation;