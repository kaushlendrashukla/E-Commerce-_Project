import React from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css'
function ProductDetails(props) {
  const { params } = useParams();

  return (
    <div>
      <h1>{params}Product Details</h1>
      <div className="img-wrapper">
      <img
        src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
        alt="img1"
        width="10%"
        className="hover-zoom"
      />
      </div>
     <br />
      <h2>Review</h2>
      <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti?</p>
    </div>
  );
}

export default ProductDetails;