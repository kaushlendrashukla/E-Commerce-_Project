import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";

 function App () {
const [cartIsShown, setCartIsShown] = useState(false)

const showCartHandler = () =>{
    setCartIsShown(true)
}

const hideCartHandler =() => {
    setCartIsShown(false)
}

    return < CartProvider>
      
        <Header onShowCart ={showCartHandler} />
        <Route path="/Home">
       <Home />
      </Route>
      <Route path="/Store">
       <Store />
       </Route>
      <Route path="/About">
       <About />
        </Route>
        <Route path = "/ContactUs">
            <ContactUs />
        </Route>
      
       
        {cartIsShown && <Cart onClose = {hideCartHandler}/>}
       
    </ CartProvider>
 }
 export default App;
 

//  <Container >
            
//         <Card style={{ width: '20rem' }}>
//         <Card.Img variant="top" src={product.imageUrl}/>
//         <Card.Body>
//           <Card.Title>  {product.title}</Card.Title>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item> ₹{product.price}</ListGroup.Item>
//           <div className="d-grid gap-2">
//       <Button variant="primary" size="lg">
//        Add to Cart
//       </Button>
//       </div>
//         </ListGroup>
//       </Card>
     
//       <br />
//       </Container>