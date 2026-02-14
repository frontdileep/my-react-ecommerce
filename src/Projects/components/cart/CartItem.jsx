import { Box, Text, Button, Image, Flex, Select } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQty, removeItem } = useCart();

  return (
    <Box borderWidth="1px" p={4} mb={3} borderRadius="md">
      <Flex gap={4} align="flex-start">
        <Box>
          <Image src={item.image} boxSize="100px" objectFit="contain" />
          <Select mt={2} size="sm" value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value))}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(q => (
              <option key={q} value={q}>Qty : {q}</option>
            ))}
          </Select>
        </Box>

        <Box flex="1">
          <Text fontWeight="bold" fontSize="lg">
            {item.title}
          </Text>

          <Text color="gray.600">₹ {item.price}</Text>

          <Text mt={2} fontWeight="medium">
            Subtotal: ₹ {item.price * item.qty}
          </Text>

          <Button size="sm" colorScheme="red" mt={2} onClick={() => removeItem(item.id)}>
            Remove
          </Button>
        </Box>

      </Flex>
    </Box>
  );
};

export default CartItem;
