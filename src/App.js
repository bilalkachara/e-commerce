import React from "react";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Home />
      <Cart />
    </CartProvider>
  );
}