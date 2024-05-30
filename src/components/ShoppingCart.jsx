import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price || 0),
    0
  );

  const handleRemoveFromCart = (dish) => {
    dispatch(removeFromCart(dish.idMeal));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-600">Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.idMeal}
            className="border-b py-2 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg text-gray-600">{item.strMeal}</h3>
              <p>${item.price || "N/A"}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="bg-red-500 text-white py-1 px-2 rounded"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h2 className="text-xl font-bold mt-4 text-gray-600">
        Total: ${total.toFixed(2)}
      </h2>
    </div>
  );
};

export default ShoppingCart;
