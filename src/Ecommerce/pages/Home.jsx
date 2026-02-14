import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ cart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  let filteredProducts = products.filter((product) => {
    const matchCategory = category == "all" || product.category == category;
    const matchMin = minPrice == "" || product.price >= Number(minPrice);
    const matchMax = maxPrice == "" || product.price <= Number(maxPrice);
    return matchCategory && matchMin && matchMax;
  });

  if (sort == "low") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort == "high") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="container">
      <div className="filters">
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(c => (
            <option key={c} value={c}>{c.toUpperCase()}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />

        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      <div className="products">
        {filteredProducts.map(product => {
          const cartItem = cart.find(item => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cartItem?.quantity || 0}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
