import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../models/Product";
import PriceSection from "../components/PriceSection";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { ProductsServices } from "../services/ProductsServices";
import productImage from "../assets/product.jpeg";
import toast from "react-hot-toast";

const SingleProduct: FC = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState<Product>();
  const navigate = useNavigate();

  useEffect(() => {
    const getProductsDetails = async () => {
      const productService = new ProductsServices();
      const response = await productService.getProductById(productID);

      if (response) {
        setProduct(response);
      }
    };

    getProductsDetails();
  }, [productID]);

  const deleteProduct = async () => {
    const productService = new ProductsServices();
    const response = await productService.deleteProductById(productID);

    if (response) {
      toast.success("Produto deletado com sucesso!", {
        position: "top-center",
      });
      navigate(-1);
    }
  };

  return (
    <div className="container mx-auto pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 font-karla">
        <div className="space-y-2">
          <img src={productImage} alt="selected" className="h-80" />
        </div>
        <div className="px-2">
          <h2 className="text-2xl">{product?.name}</h2>
          <div className="mt-1">
            <PriceSection price={product?.saleValue} />
          </div>
          <div className="mt-2">
            <h2 className="font-bold">Sobre o produto</h2>
            <p className="leading-5">{product?.description}</p>
          </div>
          <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
            <button
              type="button"
              className="flex items-center space-x-1 mb-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              <FaHandHoldingDollar />
              <span>Comprar</span>
            </button>
          </div>
          <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
            <button
              type="button"
              className="flex items-center space-x-1 mb-2 bg-red-500 text-white p-2 rounded hover:bg-red-700"
              onClick={deleteProduct}
            >
              <FaHandHoldingDollar />
              <span>Deletar Produto</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
