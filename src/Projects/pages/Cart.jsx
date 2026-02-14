import { Box, Text, Button } from "@chakra-ui/react";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (cart.length == 0) return <Text p={5}>Cart empty</Text>;

  return (
    <Box p={5}>
      <Button mb={4} onClick={() => navigate("/")}>
        ← Back to Products
      </Button>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <Text fontSize="xl" fontWeight="bold">
        Total: ₹ {total}
      </Text>
    </Box>
  );
};

export default Cart;
