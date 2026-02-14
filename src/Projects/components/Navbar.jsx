import { Box, Button, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cart } = useCart();
    // const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalItems = cart.length;

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box display="flex" justifyContent="space-between" padding="10px 20px" bg={colorMode == "light" ? "gray.200" : "gray.900"} color={colorMode == "light" ? "black" : "white"} alignItems="center" position="sticky" top="0" zIndex="1000">
            <Link to="/" style={{ fontSize: "22px", fontWeight: "bold" }}>
                Ecommerce
            </Link>

            <Box display="flex" alignItems="center" gap="15px">

                <Link to="/cart">
                    <Button size="sm" position="relative">
                        🛒
                        {totalItems > 0 && (
                            <Text position="absolute" top="-8px" right="-8px" bg="red" color="white" borderRadius="50%" fontSize="12px" px="2">
                                {totalItems}
                            </Text>
                        )}
                    </Button>
                </Link>
                <Button size="sm" onClick={toggleColorMode}>
                    {colorMode == "light" ? "🌙" : "☀️"}
                </Button>
            </Box>
        </Box>
    );
}

export default Navbar;
