import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <Box borderWidth="1px" p={4} borderRadius="md" textAlign="center">
      <Image src={product.image} h="120px" mx="auto" mb={2}/>

      <Text fontWeight="bold" noOfLines={1}>
        {product.title}
      </Text>

      <Text mt={1}>₹ {product.price}</Text>

      <Button mt={3} colorScheme="blue" onClick={handleAdd} mx="auto" display="block">
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
