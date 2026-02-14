import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Projects/pages/Login";
import { CartProvider } from "./Projects/context/CartContext";
import { ProductProvider } from "./Projects/context/ProductContext";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./Projects/components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <AppRoutes />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
