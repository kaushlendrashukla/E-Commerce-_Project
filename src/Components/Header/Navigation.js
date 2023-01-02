import { Nav } from "react-bootstrap"
import classes from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Authentication/AuthContext";

const Navigation = () => {
        const authCtx = useContext(AuthContext)
        const isLoggedIn = authCtx.isLoggedIn
      return(

          <div className={classes.header} >
         
            { isLoggedIn &&   <div className={classes.box}> <NavLink to="/">Home </NavLink> </div>}
               <div className={classes.box}> <NavLink to="About" >About</NavLink> </div>  
               <div className={classes.box}> <NavLink to="store" >Store</NavLink></div>
             
               <div className={classes.box}> <NavLink to="contactUs">Contact Us</NavLink></div>
             
               </div>
      )
              

}
export default Navigation;