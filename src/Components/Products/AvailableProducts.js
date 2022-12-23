// import Card from "../UI/Card"
import { Container, Button, Card, ListGroup, Row, Col } from "react-bootstrap"
import classes from './AvailableProduct.module.css'
import kurtaImage from '../../Assets/kurta.jpg';
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { propTypes } from "react-bootstrap/esm/Image";

const productsArr = [

  {
id: 1,
    title: 'Kurta',

    price: 100,

    imageUrl: 'data:image/jpeg;base64,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',

  },

  {
    id: 2,
    title: 'Jeans',

    price: 50,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

  },

  {
    id: 3,
    title: 'Top',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {
    id: 4,
    title: 'Shoes',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  },  
  {
    id: 5,
    title: 'Top',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {
    id: 6,
    title: 'Shoes',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  },
  {
    id: 7,
    title: 'Top',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {
    id: 8,
    title: 'Shoes',

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
  const productsList = productsArr.map(product =>
    <Card style={{margin:20, padding:10, alignItems:"center"}}>
      <div className={classes.productimage}>
      <Card.Img variant='top' src={product.imageUrl} alt={product.title} />
      </div>
      <Card.Body>
        <Card.Title style={{paddingBottom: 5}}>{product.title}</Card.Title>
        <Card.Subtitle>
          <span>
            ₹{product.price}
          </span>
        </Card.Subtitle>
        <Button style={{margin: 10 }} onClick={() => 
        {
          cartCtx.addItem({
            // items:product.item,
             id:product.id,  
             title:product.title,
            price: product.price,
            imageUrl: product.imageUrl,
            amount:1
           })
        }} >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>

  )

  return <div className={classes.product}>
{productsList}
  </div>
}
export default AvailableProducts;



