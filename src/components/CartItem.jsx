const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{item.icon}</div>
        <div>
          <h4 className="font-bold">{item.name}</h4>
          <p className="text-gray-500">
            ${item.price}
            {item.period}
          </p>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-100 text-red-600 px-4 py-2 rounded-lg"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;