import React from "react";
import ProductCard from "../Components/ProductCard";

function ShoppingCart() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <div className="row d-flex">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </div>
        </div>
        <div className="col-2">right</div>
      </div>
    </div>
  );
}

export default ShoppingCart;
