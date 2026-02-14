import { Box, Input, Button, Heading, Text, Link } from "@chakra-ui/react";
import { useState } from "react";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!name || !password) return;
    setUser(name);
  };

  const handleForgotPassword = () => {
    alert("forgot password page");
  };

  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center" bg="gray.100">
      <Box bg="white" p={8} rounded="lg" boxShadow="lg" w="350px" textAlign="center">
        <Heading mb={6}>Login</Heading>
        <Input placeholder="Enter username" mb={4} value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Enter password" type="password" mb={2} value={password} onChange={(e) => setPassword(e.target.value)} />

        <Text fontSize="sm" mb={4}>
          <Link color="blue.500" onClick={handleForgotPassword}>
            Forgot password?
          </Link>
        </Text>

        <Button colorScheme="blue" w="100%" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
