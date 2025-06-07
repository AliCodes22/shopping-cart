import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");

      if (!res) {
        return <div>Error fetching data</div>;
      }

      const { data: products } = res;

      setProducts(products);
      setIsLoading(false);
    };

    getProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(products);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopPage;
