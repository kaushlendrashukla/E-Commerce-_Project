import Header from "./Components/Header/Header";
import { Fragment,useState } from "react";
import CartIconButton from "./Components/Cart/CartIconButton";
import AvailableProducts from "./Components/Products/AvailableProducts";
import { Container } from "react-bootstrap";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

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
       
        <Container>
        <AvailableProducts />
        </Container>
        {cartIsShown &&<Cart onClose = {hideCartHandler}/>}
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