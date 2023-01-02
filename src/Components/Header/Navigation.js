import { Nav } from "react-bootstrap"
import classes from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
        
      return(

          <div className={classes.header} >
         
               <div className={classes.box}> <NavLink to="/">Home </NavLink> </div>
               <div className={classes.box}> <NavLink to="About" >About</NavLink> </div>  
               <div className={classes.box}> <NavLink to="store" >Store</NavLink></div>
             
               <div className={classes.box}> <NavLink to="contactUs">Contact Us</NavLink></div>
             
               </div>
      )
              

}
export default Navigation;