import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
        Welcome to Your Shopping Experience
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl text-center">
        Discover amazing products, add them to your cart, and enjoy seamless
        checkout.
      </p>
      <button
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        type="button"
      >
        Start Shopping
      </button>
    </div>
  );
};

export default HomePage;
