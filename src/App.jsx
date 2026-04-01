import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";


import productsData from "./data/products.json";


function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.info("Product already added!");
      return;
    }

    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error("Product removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }

    setCart([]);
    toast.success("Checkout successful!");
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <ToastContainer position="top-right" autoClose={2000} />

      <Navbar cartCount={cart.length} />
      <Hero />
      <Stats />

     

      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;