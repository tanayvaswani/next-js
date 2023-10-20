import React from "react";
import AddToCart from "../AddToCart";

const ProductCard = () => {
  return (
    <div className="p-4 my-4 text-xl bg-sky-400 hover:bg-sky-700">
      <div>ProductCard</div>
      <AddToCart />
    </div>
  );
};
 
export default ProductCard;
