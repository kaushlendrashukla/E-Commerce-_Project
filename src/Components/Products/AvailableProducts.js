// import Card from "../UI/Card"
import { Card, Button } from "react-bootstrap"
import classes from './AvailableProduct.module.css'
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { Link } from "react-router-dom";


const productsArr = [

  {
id: 1,
    title: 'Music 1',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
  },

  {
    id: 2,
    title: 'Music 2',

    price: 50,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

  },

  {
    id: 3,
    title: 'Music 3',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {
    id: 4,
    title: 'Music 4',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  },  
  {
    id: 5,
    title: 'Music 5',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {
    id: 6,
    title: 'Music 6',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  },
  {
    id: 7,
    title: 'Music 7',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {
    id: 8,
    title: 'Music 8',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  }

]

const AvailableProducts = (props) => {
const cartCtx = useContext(CartContext)
console.log(cartCtx.items)
  // const addToCartHandler = () => {
  
  //  cartCtx.addItem({
  //   items:props.item,
  //    id:props.id,  
  //    title:props.title,
  //   price: props.price
  
  //  })


  // }
  // const addItemToCart = (event) => {
  //   event.preventDefault();

  //   const data = {
  //     key: props.key,
  //     title: props.title,
  //     price: props.price,
  //     _id: props._id,
  //     url: props.url,
  //     quantity: props.quantity,
  //   };
  // }
  const productsList = productsArr.map(product =>
    <div>
      
    <Card style={{margin:20, padding:10, alignItems:"center"}}>
    <Link to='/productdetails/:productName'>
      <div className={classes.productimage}>
      <Card.Img variant='top' src={product.imageUrl} alt={product.title} />
      </div>
      </Link>
      <Card.Body>
        <Card.Title style={{paddingBottom: 5}}>{product.title}</Card.Title>
        <Card.Subtitle>
          <span>
            ₹{product.price}
          </span>
        </Card.Subtitle>
        
        <Button style={{margin: 10 }} onClick={() => 
        {
          const data = {
         
             id:product.id,  
             title:product.title,
            price: product.price,
            imageUrl: product.imageUrl,          
           }
           cartCtx.addItem(data)
           fetch(
            "https://crudcrud.com/api/c35759093f0c4fa4aa416ec57339d54d/kaushlendrashukla2015gmailcom",

           {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then((res) => {
              if (res.ok) {
                return res.json();
              }
            })
            .then((data) => {
              console.log("idd", data.id);
            
            })
            .catch((err) => {
              alert(err);
            });
        }} > 
        
          Add to Cart
        </Button>
      </Card.Body>
     
    </Card>
   
    </div>
  )

  return <div className={classes.product}>
{productsList}
  </div>
}
export default AvailableProducts;



