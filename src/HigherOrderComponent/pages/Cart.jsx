import { WithAuth } from "../HOC/WithAuth";

const Cart = () => {
  return <h2>🛒 Cart Page</h2>;
};

export default WithAuth(Cart);
