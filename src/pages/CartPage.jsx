import React from "react";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const [cartQuantity, setCartQuantity, cart, setCart] = useOutletContext();

  if (cartQuantity === 0) {
    return (
      <div className="text-center text-gray-600 text-xl mt-20">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
      {cart?.length > 0 &&
        cart.map((item, index) => <CartItem key={index} product={item} />)}
    </div>
  );
};

export default CartPage;
