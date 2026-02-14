import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Ecommerce</Link>
      <div className="cart">🛒 {cartCount}</div>
    </nav>
  );
}

export default Navbar;
