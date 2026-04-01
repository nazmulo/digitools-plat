import React from "react";

const ProductCard = ({ product, addToCart, cart }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-4">
        <div className="text-3xl">{product.icon}</div>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            product.tagType === "best"
              ? "bg-orange-100 text-orange-600"
              : product.tagType === "popular"
              ? "bg-purple-100 text-purple-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {product.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4">{product.description}</p>

      <div className="mb-4">
        <span className="text-3xl font-bold">${product.price}</span>
        <span className="text-gray-500">{product.period}</span>
      </div>

      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600">
            ✅ {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(product)}
        className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-purple-700 text-white py-3 rounded-full font-semibold"
      >
        {cart.find((item) => item.id === product.id)
          ? "Added to Cart ✓"
          : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;