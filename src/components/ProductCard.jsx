import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { category, description, image, price, rating, title } = product;

  const [itemQuantity, setItemQuantity] = useState(0);

  const [cartQuantity, setCartQuantity, cart, setCart] = useOutletContext();

  console.log(cartQuantity);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:border-blue-500 hover:bg-gray-50 transition-colors duration-200 flex flex-col">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-contain p-4 rounded-t-2xl bg-gray-50"
      />

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow justify-between space-y-4">
        {/* Category */}
        <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <span>⭐️</span>
          <span className="text-yellow-500 font-semibold">{rating?.rate}</span>
          <span className="text-sm text-gray-500">
            ({rating?.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Price */}
        <div className="text-lg font-bold text-gray-900">${price}</div>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-3">
          <button
            className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200 rounded"
            type="button"
            onClick={() => {
              setItemQuantity((prev) => {
                if (prev === 0) {
                  return (prev = 0);
                }

                return prev - 1;
              });
            }}
          >
            −
          </button>
          <input
            type="number"
            className="w-16 text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
          <button
            className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200 rounded"
            type="button"
            onClick={() => {
              setItemQuantity((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          className="w-full mt-2 bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition-colors duration-200"
          type="button"
          onClick={() => {
            setCartQuantity((prev) => prev + itemQuantity);
            setItemQuantity(0);
            setCart((prev) => {
              const newCart = [
                ...prev,
                {
                  ...product,
                  quantity: itemQuantity,
                },
              ];
              return newCart;
            });
          }}
          disabled={itemQuantity === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
