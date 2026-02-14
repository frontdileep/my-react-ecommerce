import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

function ProductCard({ product, quantity, addToCart, removeFromCart }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h4 onClick={() => navigate(`/products/${product.id}`)}>
        {product.title}
      </h4>

      <StarRating rating={product.rating.rate} />
      <p className="price">${product.price}</p>

      <div className="cart-controls">
        <button onClick={() => removeFromCart(product.id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
    </div>
  );
}

export default ProductCard;
