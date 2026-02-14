import { Routes, Route } from "react-router-dom";
import Products from "../Projects/pages/Products";
import Cart from "../Projects/pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
