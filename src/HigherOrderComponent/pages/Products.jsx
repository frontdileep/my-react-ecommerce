const Products = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Products;
