import { FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addProducts } from "../redux/features/productSlice";
import ProductCard from "../components/ProductCard";
import { Product } from "../models/Product";
import { ProductsServices } from "../services/ProductsServices";

const DeleteProduct: FC = () => {
  const dispatch = useAppDispatch();
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const allProducts = useAppSelector(
    (state) => state.productReducer.allProducts
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const productService = new ProductsServices();

      const response = await productService.getProducts();

      if (response) {
        const products = response.map((product: Product) => ({
          ...product,
        }));

        dispatch(addProducts(products));
      }
    };

    fetchProducts();
  }, [allProducts, dispatch]);

  useEffect(() => {
    setCurrentProducts(allProducts);
  }, [allProducts]);

  return (
    <div className="container mx-auto min-h-[83vh] p-4 font-karla">
      <div className="grid grid-cols-6 gap-1">
        <div className="col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-lg">
              <span>Produtos Cadastrados</span>
            </div>
          </div>
          <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
