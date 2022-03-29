import React, { Component } from "react";
import { useAtom } from "jotai";
import { getProductsList } from "../try/Atoms";
import { whiteCart } from "../NavBar/imports";

export const ProductsCards = () => {
  const [data] = useAtom(getProductsList);
  return (
    <>
      <ProductsUI productsList={data} />
    </>
  );
};

class ProductsUI extends Component {
  hoverEffects = (e) => {
    e.target
      .closest(".container__card-list__containercard")
      .querySelector(".cart-icon")
      .classList.toggle("display");

    e.target
      .closest(".container__card-list__containercard")
      .classList.toggle("cart-btn-hover");
  };
  displayProductsUI = () => {
    const { products } = this.props.productsList.category;

    return products.map((product, i) => {
      const { id, name, gallery } = product;
      return (
        <div
          onMouseEnter={this.hoverEffects}
          onMouseLeave={this.hoverEffects}
          key={i}
          id={id}
          className="container__card-list__containercard"
        >
          <div className="container__card-list__containercard-img">
            <img className="img" src={gallery[0]} alt={"product-image"} />
          </div>
          <header className="container__card-list__containercard-card-header">
            <h1>{name}</h1>
            <p>
              {product.prices[0].currency.symbol} {product.prices[0].amount}
            </p>
            <div className="cart-icon">
              <img src={whiteCart} alt="cart" />
            </div>
          </header>
        </div>
      );
    });
  };

  render() {
    return this.displayProductsUI();
  }
}
