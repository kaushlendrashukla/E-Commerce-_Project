import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";

function App() {
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
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/Store">
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
            </Switch>
       
        {cartIsShown && <Cart onClose={hideCartHandler} />}

    </ CartProvider>
}
export default App;

