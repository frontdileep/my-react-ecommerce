// import CountrySelector from "./CountrySelector";
// import StarRating from "./StarRating";
// import ThemeToggle from "./ToogleMode";
// const App = () => {
//   return (
//     // <div
//     //   style={{
//     //     display: "flex",
//     //     justifyContent: "center",
//     //     alignItems: "center",
//     //     minHeight: "100vh",
//     //   }}
//     // >
//     //   <ProductList />
//     // </div>
//     <>
//       {/* <ThemeToggle/> */}
//       {/* <CountrySelector/> */}
//       {/* <StarRating /> */}
//     </>
//   )
// }

import UseState from "./UseState"

// export default App;





//Ecommerece phaase1

// import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Home from "./Ecommerce/pages/Home";
// import ProductDetails from "./Ecommerce/pages/ProductDetails";
// import Navbar from "./Ecommerce/components/Navbar";



// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const exist = prev.find((item) => item.id == product.id);
//       if (exist) {
//         return prev.map((item) =>
//           item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//           item.id == id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <>
//       <Navbar cartCount={cartCount} />
//       <Routes>
//         <Route path="/" element={<Home cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//         <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
//       </Routes>
//     </>
//   );
// }

// export default App;



//Higher order component
// import { useEffect, useState } from "react";
// import { WithAuth } from "./HigherOrderComponent/HOC/WithAuth";
// import { WithLoading } from "./HigherOrderComponent/HOC/WithLoading";
// import Products from "./HigherOrderComponent/pages/Products";


// // HOC composition
// const ProductsWithAuth = WithAuth(Products);
// const ProductsWithAuthAndLoading = WithLoading(ProductsWithAuth);

// function App() {
//   const isLoggedIn = true;

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (isLoggedIn) {
//       setTimeout(() => {
//         setProducts([
//           { id: 1, name: "Mobile" },
//           { id: 2, name: "Laptop" },
//           { id: 3, name: "Headphones" },
//         ]);
//         setLoading(false);
//       }, 2000);
//     } else {
//       setLoading(false);
//     }
//   }, [isLoggedIn]);

//   return (
//     <div>
//       <h1>HOC</h1>

//       <ProductsWithAuthAndLoading
//         isLoggedIn={isLoggedIn}
//         isLoading={loading}
//         products={products}
//       />
//     </div>
//   );
// }

// export default App;







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




// const App = () => {
//   return(
// <UseState/>
//   )
// }
// export default App
