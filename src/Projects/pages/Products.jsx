import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/product/ProductCard";
import { useProducts } from "../context/ProductContext";

const Products = () => {
  const { products } = useProducts();

  return (
    <Box p={5}>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
