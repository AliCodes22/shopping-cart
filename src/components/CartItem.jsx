const CartItem = ({ product }) => {
  const { image, title, category, rating, description, quantity } = product;

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all">
      {/* Image */}
      <div className="w-full md:w-1/4 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
        <img src={image} alt={title} className="h-40 object-contain" />
      </div>

      {/* Details */}
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-blue-500 uppercase">
            {category}
          </span>
          <div className="text-sm text-gray-500">
            ⭐ {rating?.rate} ({rating?.count})
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="text-sm text-gray-700 flex items-center space-x-2">
          Quantity: {quantity}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
