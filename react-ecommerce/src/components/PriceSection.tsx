import { FC } from "react";

const PriceSection: FC<{ price: number }> = ({ price }) => {
  return (
    <div className="leading-3">
      <h2 className="font-medium text-blue-500 text-xl">${price}</h2>
    </div>
  );
};

export default PriceSection;
