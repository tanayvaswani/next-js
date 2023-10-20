"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => console.log("Add to cart clicked!")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
