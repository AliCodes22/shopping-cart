import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link, useOutletContext } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorPage from "./ErrorPage";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [cartQuantity, setCartQuantity] = useOutletContext();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");

        const { data: products } = res;

        setProducts(products);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loader />;
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
