import { Button } from "react-bootstrap";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartContext from "../../Store/cart-context";
import { useContext } from "react";

import CartItem from "./CartItems";
const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount
    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem key ={item.id} title = {item.title}  price={item.price} url={item.imageUrl} />  //imageUrl={item.imageUrl}
          ))}
        </ul>
      );
return (<Modal onClose={props.onClose}>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
     < button className={classes.button}>Order</button> 
    </div>
  </Modal>
    )

}
export default Cart;