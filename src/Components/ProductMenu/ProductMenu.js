import React, { Component } from "react";

export class ProductMenu extends Component {
  render() {
    return (
      <div className="product-menu">
        <div className="product-menu__heading">
          <div className="product-menu__heading-info">
            <h2></h2>
            <p></p>
          </div>
          <div className="product-menu__heading-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="product-menu__attr"></div>
        <div className="product-menu__number">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="product-menu__btns">
          <p></p>
          <p></p>
        </div>
      </div>
    );
  }
}

export default ProductMenu;
