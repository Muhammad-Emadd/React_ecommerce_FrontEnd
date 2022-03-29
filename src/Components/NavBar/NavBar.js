import React, { PureComponent } from "react";
import { Categories2 } from "./Categories";

// import Categories from "./Categories";
import CurrenciesPanel from "./CurrienciesPanel";
import { logo, blackCart, currClosed, currOpened } from "./imports";

const miniMenue = () => {
  return (
    <>
      <article className="cart">
        <div className="cart__header">
          <h2>
            <strong>My Bag</strong>, 2 items
          </h2>
        </div>
        <div className="cart__product">
          <article className="cart__product-cart__cart-menu">
            <div className="cart__product-cart__cart-menu__card1">
              <h3>
                Apollo <br /> Running Short
              </h3>
              <p>$50.00</p>
              <div className="cart__product-cart__cart-menu__card1__size-btn">
                <p>S</p>
                <p>M</p>
              </div>
            </div>
            <div className="cart__product-cart__cart-menu__pieces-btn">
              <p>+</p>
              <p>1</p>
              <p>-</p>
            </div>
            <img
              className="img"
              src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
              alt="a7a"
            />
          </article>
          <article className="cart__product-cart__cart-menu">
            <div className="cart__product-cart__cart-menu__card1">
              <h3>
                Apollo <br /> Running Short
              </h3>
              <p>$50.00</p>
              <div className="cart__product-cart__cart-menu__card1__size-btn">
                <p>S</p>
                <p>M</p>
              </div>
            </div>
            <div className="cart__product-cart__cart-menu__pieces-btn">
              <p>+</p>
              <p>1</p>
              <p>-</p>
            </div>
            <img
              className="img"
              src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
              alt="a7a"
            />
          </article>
        </div>
        <div className="cart__amount">
          <h2>Total</h2>
          <p>$100.00</p>
        </div>
        <div className="cart__btns">
          <p>VIEW BAG</p>
          <p>CHECK OUT</p>
        </div>
      </article>
    </>
  );
};

export class NavBar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__categories">
          <Categories2 />
        </div>
        <div className="navbar__logo">
          <img className="navbar__logo-img" src={logo} alt="logo" />
        </div>

        <div className="currenciesPanel">
          <CurrenciesPanel />
        </div>
        {miniMenue()}
        <div className="navbar__actions">
          <div className="navbar__actions-currClosed">
            <img src={currClosed} alt="currClosed" />
          </div>

          <div className="navbar__actions-blackCart">
            <img src={blackCart} alt="blackCart" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
