import React from "react";
import ProductCard from "../Components/ProductCard";
import img1 from "../assets/images/mobile1.avif";

function ShoppingCart() {

  const datas = [
    {
      id: 1,
      name: "iPhone",
      price: 50000,
      img: img1,
      desc: "card title and make up the bulk of the card's content.",
      isStock: true
    },
    {
      id: 2,
      name: "Moto",
      price: 15000,
      img: img1,
      desc: "card title and make up the bulk of the card's content.",
      isStock: false
    },
    {
      id: 3,
      name: "Mi",
      price: 20000,
      img: img1,
      desc: "card title and make up the bulk of the card's content.",
      isStock: true
    },
    {
      id: 4,
      name: "Sony",
      price: 45000,
      img: img1,
      desc: "card title and make up the bulk of the card's content.",
      isStock: true
    },
    {
      id: 5,
      name: "Samsung",
      price: 17000,
      img: img1,
      desc: "card title and make up the bulk of the card's content.",
      isStock: false
    },
    {
      id: 6,
      name: "Vivo",
      price: 24000,
      img: img1,
      desc: "card title and make up the bulk of the card's content.",
      isStock: true
    },
  ];
  

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <div className="row d-flex">
            {datas.map((item) => {
              return <ProductCard item={item} />;
            })}
          </div>
        </div>
        <div className="col-2">right</div>
      </div>
    </div>
  );
}

export default ShoppingCart;
