const ProductCard = ({ product }) => {
  const { category, description, id, image, price, rating, title } = product;

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden max-w-sm transition hover:scale-105 duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-contain p-4 bg-gray-50"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-amber-600">${price}</span>
          <span className="text-sm text-gray-600">
            ⭐ {rating?.rate} ({rating?.count})
          </span>
        </div>
        <span className="text-xs font-medium text-gray-400 uppercase mt-1">
          {category}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
