import classes from './CartItem.module.css';
import {Card  } from "react-bootstrap"

const CartItem = (props) => {
  const price = `$${props.price}`;

  // return (


  //   <li className={classes['cart-item']}>
      
  //     <div>
  //     <div>{props.image}</div>
  //       <h2>{props.title}</h2>
  //       <div className={classes.summary}>
  //         <span className={classes.price}>{price}</span>
  //         {/* <span className={classes.amount}>x {props.amount}</span> */}
  //       </div>
  //     </div>
  //     <div className={classes.actions}>
  //       <button onClick={props.onRemove}>−</button>
  //       <button onClick={props.onAdd}>+</button>
  //     </div>
  //   </li>
  
  // );
  return   <li className={classes['cart-item']}>
  <div className={classes['image-box']}>   
      <img src={props.url} alt='img' height='50px'></img>
  </div>
          <h3 className={classes.title}>Title: {props.title}</h3>
    <div className={classes.summary}>
          <span className={classes.price}>Price: {props.price}</span>        
          
    </div>  
            {/* <button onClick={incrementHandler}>-</button>
            <span>{state}</span>
            <button onClick={()=>dispatch({type:"INC"})}>+</button>
        <div className={classes.actions}>
          <button onClick={onRemove}>x</button>
        </div> */}
        
</li>
};

export default CartItem;
