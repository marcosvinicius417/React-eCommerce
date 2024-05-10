import { FC } from "react";
import { Product } from "../models/Product";
import { Link } from "react-router-dom";
import PriceSection from "./PriceSection";
import productImage from "../assets/product.jpeg";

const ProductCard: FC<Product> = ({ id, saleValue, name, description }) => {
  return (
    <div className="border border-gray-200 font-lato" data-test="product-card">
      <div className="text-center border-b border-gray-200">
        <Link to={{ pathname: `/product/${id}` }}>
          <img src={productImage} alt={name} className="inline-block h-60" />
        </Link>
      </div>
      <div className="px-8 pt-4">
        <Link
          className="font-semibold hover:underline"
          to={{ pathname: `/product/${id}` }}
        >
          {name}
        </Link>
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-between px-8 pb-4">
        <PriceSection price={saleValue} />
      </div>
    </div>
  );
};

export default ProductCard;
