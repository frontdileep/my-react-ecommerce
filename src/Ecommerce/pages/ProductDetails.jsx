import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="details">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <StarRating rating={product.rating.rate} />
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <p><b>Category:</b> {product.category}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
