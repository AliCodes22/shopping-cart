import { useOutletContext, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const [cartQuantity, setCartQuantity, cart, setCart] = useOutletContext();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => (sum += Number(item.quantity) * Number(item.price)),
    0
  );

  console.log(cart);

  if (cartQuantity === 0) {
    return (
      <div className="text-center text-gray-600 text-xl mt-20">
        🛒 Your cart is empty
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
        Your Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart?.length > 0 &&
            cart.map((item, index) => <CartItem key={index} product={item} />)}
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 h-fit sticky top-20">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold text-gray-900">
              ${total.toFixed(2)}
            </span>
          </div>

          <hr className="mb-4" />

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Proceed to Checkout
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
