import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-6">
      {/* Icon */}
      <div className="mb-6">
        <div className="bg-indigo-100 p-4 rounded-full shadow-inner">
          <ShoppingBag className="w-12 h-12 text-indigo-600" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center leading-tight">
        Welcome to Odin Store
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl text-center">
        Browse curated products, add your favorites to the cart, and experience
        a smooth, modern checkout.
      </p>

      {/* CTA Button */}
      <Link to="/shop">
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Shopping
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
