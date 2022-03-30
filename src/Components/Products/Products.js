import React, { Component } from "react";
import { useAtom } from "jotai";
import { getProductsList, choosedCurrAtom } from "../../jotai/Atoms";
import { whiteCart } from "../../Containers/NavBar/imports";

export const ProductsCards = () => {
  const [ProductsList] = useAtom(getProductsList);
  const [choosedCurr] = useAtom(choosedCurrAtom);
  console.log(choosedCurr);

  return (
    <>
      <ProductsUI choosedCurr={choosedCurr} productsList={ProductsList} />
    </>
  );
};

class ProductsUI extends Component {
  hoverEffects = (e) => {
    const cardContainer = e.target.closest(
      ".container__card-list__containercard"
    );

    cardContainer.querySelector(".cart-icon").classList.toggle("display");
    cardContainer.classList.toggle("cart-btn-hover");
  };

  render() {
    const { products } = this.props.productsList.category;
    const { symbol } = this.props.choosedCurr;

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
              {symbol} {product.prices[0].amount}
            </p>
            <div className="cart-icon">
              <img src={whiteCart} alt="cart" />
            </div>
          </header>
        </div>
      );
    });
  }
}
