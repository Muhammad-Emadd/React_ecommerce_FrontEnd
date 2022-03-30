import React, { Component } from "react";
import NavBar from "../../Containers/NavBar/NavBar";

export class CartPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <section className="product-page">
          <article className="product-page__images">
            <div className="product-page__images-img">
              <img
                className="img"
                src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
                alt="a7a"
              />
            </div>
            <div className="product-page__images-img">
              <img
                className="img"
                src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
                alt="a7a"
              />
            </div>
            <div className="product-page__images-img">
              <img
                className="img"
                src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
                alt="a7a"
              />
            </div>
            <div className="product-page__images-img">
              <img
                className="img"
                src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
                alt="a7a"
              />
            </div>
          </article>
          <div className="product-page__product-info">
            <div className="product-page__product-info__main-img">
              <img
                src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
                alt="asdsa"
                className="img"
              />
            </div>
            <article className="product-page__product-info__main-info">
              <h2>
                Apollo
                <br />
                Running Short
              </h2>
              <div className="product-page__product-info__main-info__sizes">
                <h3>SIZE</h3>
                <div className="product-page__product-info__main-info__sizes-btns">
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                </div>
              </div>
              <div className="product-page__product-info__main-info__price">
                <p>PRICE</p>
                <p>$50.00</p>
              </div>
              <div className="product-page__product-info__main-info__addbtn">
                <p>ADD TO CART</p>
              </div>
              <div className="product-page__product-info__main-info__describtion">
                <p>
                  Find stunning women's cocktail dresses and party dresses.
                  Stand out in lace and metallic cocktail dresses and party
                  dresses from all your favorite brands.
                </p>
              </div>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default CartPage;
