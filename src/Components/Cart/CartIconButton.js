import CartIcon from "./CartIcon";
import classes from './CartIconButton.module.css'

const CartIconButton = (props) => {
return  <button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}>
    <CartIcon />
</span>
<span> Cart</span>
<span className={classes.badge}>10</span>
</button>
}
export default CartIconButton;