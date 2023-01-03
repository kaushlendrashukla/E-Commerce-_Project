import classes from './CartItem.module.css';
import {Card  } from "react-bootstrap"

const CartItem = (props) => {
  const price = `₹${props.price}`;
  const onRemove = () => {
    console.log("id",props)
    fetch(`https://crudcrud.com/api/c35759093f0c4fa4aa416ec57339d54d/kaushlendrashukla2015gmailcom/${props._id}`,{
      method:"DELETE"
    }).then((res)=>{
      console.log(res)
      alert("deleted")
    }).catch((err)=>{
      alert(err)
    })
    
  };
  return   <li className={classes['cart-item']}>
  <div className={classes['image-box']}>   
      <img src={props.url} alt='img' height='50px'></img>
  </div>
          <h3 className={classes.title}>Title: {props.title}</h3>
    <div className={classes.summary}>
          <span className={classes.price}>Price: {price}</span>        
          
    </div>  
    <div className={classes.actions}>
         <button onClick={onRemove}>X</button>
        
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
