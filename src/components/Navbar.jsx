import { Link } from "react-router-dom";

const Navbar = ({ cartQuantity }) => {
  return (
    <nav className="bg-amber-400 px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold text-gray-900">Odin Store</div>
      <div className="space-x-6">
        <Link
          to="/"
          className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-300"
        >
          Shop
        </Link>
        <p
          className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold"
          title="Items in cart"
        >
          {cartQuantity}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
