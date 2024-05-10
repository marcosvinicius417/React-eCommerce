import { FC, useEffect } from "react";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  updateNewList,
  updateFeaturedList,
} from "../redux/features/productSlice";
import { Product } from "../models/Product";
import { ProductsServices } from "../services/ProductsServices";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.authReducer.username);

  useEffect(() => {
    const fetchProducts = async () => {
      const productService = new ProductsServices();

      const response = await productService.getProducts();

      if (response) {
        const products = response.map((product: Product) => ({
          ...product,
        }));

        dispatch(updateFeaturedList(products.slice(0, 8)));
        dispatch(updateNewList(products.slice(8, 16)));
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Features />

      {username !== "" ? (
        <TrendingProducts />
      ) : (
        <div className="container mt-8 mx-auto px-4">
          <div className="sm:flex items-center justify-between">
            <h2 className="text-4xl font-medium font-lora">
              Faça login para visualizar os produtos.
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
