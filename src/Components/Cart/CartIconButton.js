import CartIcon from "./CartIcon";
import classes from './CartIconButton.module.css'
import { useContext } from "react";
import CartContext from "../../Store/cart-context";



const CartIconButton = (props) => {

const cartCtx = useContext(CartContext);

const numberOfCartItems = cartCtx.items.length;
// const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
// return currentNumber + item.amount;
// }, 0);
console.log(numberOfCartItems)
console.log(cartCtx)


return  <button className={classes.button} onClick={props.onClick} >
<span className={classes.icon}>
    <CartIcon />
</span>
<span> Cart</span>
<span className={classes.badge}>{numberOfCartItems}</span>
</button>
}
export default CartIconButton;