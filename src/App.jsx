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

import CartIcon from "./assets/shopping-cart.png";


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

      {/* Products + Cart */}
      <section id="products" className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
          <p className="text-gray-500 mt-3">
            Choose from our curated collection of premium digital products.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-2 rounded-full shadow border flex gap-2">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeTab === "products"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeTab === "cart"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Product Section */}
        {activeTab === "products" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                cart={cart}
              />
            ))}
          </div>
        ) : (
          /* Cart Section */
          <div className="max-w-3xl mx-auto">
            {cart.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed p-12 text-center">
                <div className="bg-white rounded-2xl border border-dashed p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                      <img src={CartIcon} alt="Cart Icon"className="w-10 h-10 object-contain" />
                      </div>
                      </div>

                     <h3 className="text-2xl font-bold mb-2">Your cart is empty</h3>
                     <p className="text-gray-500">
                              Add products from the product section.
                            </p>
                     </div>
                
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                  />
                ))}

                <div className="bg-white p-6 rounded-2xl border flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <p className="text-gray-500">
                      Total Products: <span className="font-bold">{cart.length}</span>
                    </p>
                    <h3 className="text-3xl font-bold">Total: ${totalPrice}</h3>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;