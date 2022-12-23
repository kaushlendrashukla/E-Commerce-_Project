import { Container, Navbar, Nav } from "react-bootstrap"
import classes from './Navigation.module.css';

const Navigation = () => {
    return <Navbar style={{ marginRight: -98, marginLeft: -105 }} variant="dark">
        
      

          <div className={classes.navigation} >
         
               <div className={classes.box}> <Nav.Link href="#home">Home </Nav.Link> </div>
               <div className={classes.box}> <Nav.Link href="#Men"  class="link-info" >Men</Nav.Link> </div>  
               <div className={classes.box}> <Nav.Link href="#Women" >Women</Nav.Link></div>
               <div className={classes.box}> <Nav.Link href="#Children">Children</Nav.Link></div>
               <div className={classes.box}> <Nav.Link href="#Beauty">Beauty</Nav.Link></div>
               <div className={classes.box}> <Nav.Link href="#Shoes">Shoes</Nav.Link></div>
               <div className={classes.box}> <Nav.Link href="#Entertainment">Entertainment</Nav.Link></div>
             
               </div>
              
    </Navbar>

}
export default Navigation;