import React, { Component } from "react";
import { whiteCart } from "./imports";

export class ProductsCardsFront extends Component {
  openCardBack = (e) => {
    this.props.setEditId(
      e.target.closest(".container__card-list__containercard").id
    );
    this.props.setToggleDialog();
  };
  shouldComponentUpdate(nextProps) {
    if (this.props.toggleDialog !== nextProps.toggleDialog) {
      return false;
    } else return true;
  }
  showCartButton = (e) => {
    if (this.props.productData.inStock) {
      const cardContainer = e.target.closest(
        ".container__card-list__containercard-front"
      );
      cardContainer.querySelector(".cart-icon").classList.add("display");
      cardContainer.classList.add("cart-btn-hover");
    }
  };
  hideCartButton = (e) => {
    if (this.props.productData.inStock) {
      const cardContainer = e.target.closest(
        ".container__card-list__containercard-front"
      );
      cardContainer.querySelector(".cart-icon").classList.remove("display");
      cardContainer.classList.remove("cart-btn-hover");
    }
  };
  render() {
    const { symbol, label } = this.props.choosedCurr;
    const { name, gallery, prices, inStock } = this.props.productData;
    const price = prices.filter((price) => {
      return price.currency.label === label;
    })[0].amount;
    return (
      <div
        style={!inStock ? { opacity: "50%" } : {}}
        onMouseEnter={this.showCartButton}
        onMouseLeave={this.hideCartButton}
        className="container__card-list__containercard-front"
      >
        {!inStock ? (
          <div className="unavailable">
            <h1>OUT OF STOCK</h1>
          </div>
        ) : (
          ""
        )}
        <div className="container__card-list__containercard-front-img">
          <img className="img" src={gallery[0]} alt={"product"} />
        </div>
        <header className="container__card-list__containercard-front-card-header">
          <h1>{name}</h1>
          <p>
            {symbol} {price}
          </p>
          <div className="cart-icon" onClick={this.openCardBack}>
            <img src={whiteCart} alt="cart" />
          </div>
        </header>
      </div>
    );
  }
}

export default React.memo(ProductsCardsFront);
