import { Button } from "react-bootstrap";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartContext from "../../Store/cart-context";
import { useContext, useEffect, useState,useCallback } from "react";

import CartItem from "./CartItems";
const Cart = props => {
  const [products, setProducts] = useState([]);
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount
    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem key ={item.id} title = {item.title}  price={item.price} url={item.imageUrl} />  //imageUrl={item.imageUrl}
          ))}
        </ul>
      );
      let total=0

      products.forEach((item) => {
          total = total + Number(item.price)
      });
      total = `₹${total}`
      useEffect(() => {
        getProductData();
      }, []);
      
      const getProductData = useCallback(async () => {
        
        try {
          const response = await fetch(
            "https://crudcrud.com/api/c35759093f0c4fa4aa416ec57339d54d/kaushlendrashukla2015gmailcom"
          );
          if (!response.ok) {
            throw new Error("Something went wrong....");
          }
    
          const data = await response.json();
           setProducts(data);
          
    
        } catch (err) {
          console.log(err.message);
        }
      }, []);

return (<Modal onClose={props.onClose}>
   {products.map((item) => (
        <CartItem
          key={item.key}
          title={item.title}
          _id={item._id}
          price={item.price}
          url={item.imageUrl}
          quantity={item.quantity}
        />
      ))}
    {/* {cartItems} */}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{total}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
     < button className={classes.button}>Order</button> 
    </div>
  </Modal>
    )

}
export default Cart;