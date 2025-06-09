import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartQuantity }) => {
  return (
    <nav className="bg-amber-300 px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900">
        <Link to="/">Odin Store</Link>
      </div>

      <div className="flex items-center space-x-8">
        {/* Links */}
        <Link
          to="/"
          className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-300 underline-offset-4 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-300 underline-offset-4 hover:underline"
        >
          Shop
        </Link>

        {/* Cart Icon + Quantity */}
        <Link
          to="/cart"
          className="relative flex items-center space-x-2 bg-white/90 hover:bg-white rounded-full px-3 py-1 shadow-md transition-colors duration-200 cursor-pointer"
          title="View Cart"
        >
          <ShoppingCart className="text-gray-800" size={20} />
          <span className="text-gray-900 font-semibold">{cartQuantity}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
