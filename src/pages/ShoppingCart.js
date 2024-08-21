import React, { useReducer, useState } from "react";
import ProductCard from "../Components/ProductCard";
import img1 from "../assets/images/mobile1.avif";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.jpg";
import CartItem from "../Components/CartItem";

function ShoppingCart() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "AddToCart":
        return {
          ...state,
          cartItem: [...state.cartItem, action.item],
          total: state.total + action.item.price,
        };

      case "RemoveFromCart":
        return {
          ...state,
          cartItem: state.cartItem.filter(
            (cItem) => cItem.id != action.item.id
          ),
          total: state.total - action.item.price,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    datas: [
      {
        id: 1,
        name: "iPhone",
        price: 50000,
        img: img1,
        desc: "card title and make up the bulk of the card's content.",
        isStock: true,
      },
      {
        id: 2,
        name: "Moto",
        price: 15000,
        img: img2,
        desc: "card title and make up the bulk of the card's content.",
        isStock: false,
      },
      {
        id: 3,
        name: "Mi",
        price: 20000,
        img: img3,
        desc: "card title and make up the bulk of the card's content.",
        isStock: true,
      },
      {
        id: 4,
        name: "Sony",
        price: 45000,
        img: img1,
        desc: "card title and make up the bulk of the card's content.",
        isStock: true,
      },
      {
        id: 5,
        name: "Samsung",
        price: 17000,
        img: img2,
        desc: "card title and make up the bulk of the card's content.",
        isStock: false,
      },
      {
        id: 6,
        name: "Vivo",
        price: 24000,
        img: img3,
        desc: "card title and make up the bulk of the card's content.",
        isStock: true,
      },
    ],
    cartItem: [],
    total: 0,
  });

  const handleAddToCart = (item) => {
    dispatch({ type: "AddToCart", item });
  };

  const handleRemoveFromCart = (item) => {
    dispatch({ type: "RemoveFromCart", item });
  };

  // const datas = [
  //   {
  //     id: 1,
  //     name: "iPhone",
  //     price: 50000,
  //     img: img1,
  //     desc: "card title and make up the bulk of the card's content.",
  //     isStock: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Moto",
  //     price: 15000,
  //     img: img2,
  //     desc: "card title and make up the bulk of the card's content.",
  //     isStock: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Mi",
  //     price: 20000,
  //     img: img3,
  //     desc: "card title and make up the bulk of the card's content.",
  //     isStock: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Sony",
  //     price: 45000,
  //     img: img1,
  //     desc: "card title and make up the bulk of the card's content.",
  //     isStock: true,
  //   },
  //   {
  //     id: 5,
  //     name: "Samsung",
  //     price: 17000,
  //     img: img2,
  //     desc: "card title and make up the bulk of the card's content.",
  //     isStock: false,
  //   },
  //   {
  //     id: 6,
  //     name: "Vivo",
  //     price: 24000,
  //     img: img3,
  //     desc: "card title and make up the bulk of the card's content.",
  //     isStock: true,
  //   },
  // ];

  // const [cartItem, setCartItem] = useState([]);
  // const [total, setTotal] = useState(0);

  // const handleAddToCart = (item) => {
  //   setCartItem([...cartItem, item]);
  //   setTotal(total + item.price)
  // };

  // const handleRemoveFromCart = (item) => {
  //   let temp = cartItem.filter((cItem) => cItem.id != item.id)
  //   setCartItem(temp)
  //   setTotal(total - item.price)
  // }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <div className="row d-flex">
            {state.datas.map((item) => {
              return (
                <ProductCard item={item} handleAddToCart={handleAddToCart} />
              );
            })}
          </div>
        </div>
        <div className="col-2">
          <ol class="list-group list-group-numbered">
            <h2>Count: {state.cartItem.length}</h2>
            {state.cartItem.map((item) => {
              return (
                <CartItem
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
            <h2>Total: {state.total}</h2>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
