import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useState ,useContext } from "react";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Authentication/Login";
import AuthContext from "./Authentication/AuthContext";
function App() {
    const authCtx = useContext(AuthContext)
    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    return < CartProvider>

        <Header onShowCart={showCartHandler} />
    <Switch>
        <Route path="/" exact>
           {authCtx.isLoggedIn && <Home />}
           {!authCtx.isLoggedIn &&  <Redirect to= "/login" />}
        </Route>
        <Route path="/Store"  >
            <Store />
        </Route>
        <Route path="/About">
            <About />
        </Route>
        <Route path="/ContactUs">
            <ContactUs />
        </Route>
        <Route path='/productdetails/:productName'>
              <ProductDetails/>
            </Route>
          {!authCtx.isLoggedIn &&  <Route path='/login'>
            <Login/>
            </Route>}
            <Route path = "*">
          <Redirect to= "/" />
        </Route>
            </Switch>
       
        {cartIsShown && <Cart onClose={hideCartHandler} />}

    </ CartProvider>
}
export default App;

