import { useAtom } from "jotai";
import React, { Component } from "react";
import { useQueries } from "react-query";
import { Link } from "react-router-dom";
import {
  setCartAtom,
  CartLengthAtom,
  readCartAtom,
  choosedCurrAtom,
  countsAtom,
  readTotalAtom,
  toggleCartModalAtom,
  toggleCurrencyMenuAtom,
  deleteFromCartAtom,
  blackCart,
  Counter,
  Scroll,
  getCardDetails,
  getData,
} from "./imports";

export function CartModal() {
  const [counts] = useAtom(countsAtom);
  const [showCartModal, setCartModal] = useAtom(toggleCartModalAtom);
  const [readCart] = useAtom(readCartAtom);
  const [CartLength] = useAtom(CartLengthAtom);
  const [choosedCurr] = useAtom(choosedCurrAtom);
  const [readTotal] = useAtom(readTotalAtom);
  const [showCurrencyMenu] = useAtom(toggleCurrencyMenuAtom);
  const [, setCart] = useAtom(setCartAtom);
  const [, deleteFromCart] = useAtom(deleteFromCartAtom);

  const productQueries = useQueries(
    readCart.map((product) => {
      return {
        queryKey: ["product", product.id],
        queryFn: () => getData(getCardDetails(product.id)),
      };
    })
  );

  const readWriteAtoms = {
    setCart,
    setCartModal,
    deleteFromCart,
    CartLength,
    readCart,
    choosedCurr,
    counts,
    readTotal,
    showCartModal,
    showCurrencyMenu,
  };

  return <CartModalClass {...readWriteAtoms} productQueries={productQueries} />;
}

class CartModalClass extends Component {
  constructor() {
    super();
    this.onToggleCart = this.onToggleCart.bind(this);
  }
  onToggleCart(e) {
    const { showCartModal, setCartModal, CartLength, showCurrencyMenu } =
      this.props;

    if (showCartModal) setCartModal(false);
    if (!showCartModal && !showCurrencyMenu && CartLength > 0)
      setCartModal(true);
  }
  render() {
    const {
      CartLength,
      counts,
      readCart,
      readTotal,
      showCartModal,
      setCartModal,
      deleteFromCart,
    } = this.props;
    const { symbol, label } = this.props.choosedCurr;
    return (
      <>
        <div onClick={this.onToggleCart} className="navbar__actions-blackCart">
          <div
            style={showCartModal ? { display: "block" } : { display: "none" }}
            className="overlay"
          />
          <img src={blackCart} alt="blackCart" />
          <sup style={CartLength <= 0 ? { display: "none" } : {}}>
            {CartLength}
          </sup>
        </div>
        <article
          className="cart"
          style={showCartModal ? { display: "block" } : { display: "none" }}
        >
          <Scroll maxHeight="70vh">
            <div className="cart__header">
              <h2>
                <strong>My Bag</strong>, {CartLength} items
              </h2>
            </div>
            <div className="cart__product">
              {this.props.productQueries.map((product, ind) => {
                if (product.isLoading) return "Loading...";
                if (product.error) return <pre>{product.error.message}</pre>;

                const { name, gallery, prices, attributes, id } = product.data
                  ? product.data.product
                  : "";
                const price = prices
                  ? prices.filter((price) => {
                      return price.currency.label === label;
                    })[0].amount
                  : "";
                const [checkedAttr] = readCart.filter(
                  (product) => product.id === id
                );

                return (
                  <article key={ind} className="cart__product-cart__cart-menu">
                    <button
                      className="delete-product"
                      onClick={() =>
                        deleteFromCart({ id, i: counts[ind].toString() })
                      }
                      button="delete"
                    >
                      &#10007;
                    </button>
                    <div className="cart__product-cart__cart-menu__card1">
                      <h3>{name}</h3>
                      <p>
                        {symbol} {price}
                      </p>
                      <div className="cart__product-cart__cart-menu__card1__attributes">
                        {attributes.length > 0
                          ? attributes.map(({ name, type, items }, i) => {
                              return (
                                <fieldset
                                  key={i}
                                  className={`cart__product-cart__cart-menu__card1__attributes-${type}__items`}
                                  form="attributes-form"
                                >
                                  <legend>{name}</legend>
                                  {items.map((item, i) => {
                                    const attribute =
                                      checkedAttr.attributes.filter(
                                        (attr) => attr.name === name
                                      )[0];
                                    return (
                                      <label key={i}>
                                        <span
                                          className={
                                            attribute.value === item.value &&
                                            type === "swatch"
                                              ? `${type}__items-${name} checked-swatch`
                                              : attribute.value ===
                                                  item.value && type === "text"
                                              ? `${type}__items-${name} checked-text`
                                              : `${type}__items-${name} opacity`
                                          }
                                          style={
                                            type === "swatch"
                                              ? {
                                                  backgroundColor: item.value,
                                                }
                                              : {
                                                  backgroundColor: item.value,
                                                }
                                          }
                                        >
                                          {type !== "swatch" ? item.value : ""}
                                        </span>
                                      </label>
                                    );
                                  })}
                                </fieldset>
                              );
                            })
                          : ""}
                      </div>
                    </div>
                    <div className="cart__product-cart__cart-menu__pieces-btn">
                      <Counter
                        countAtom={counts[ind]}
                        key={counts[ind].toString()}
                        amount={readCart[ind].amount}
                        price={price}
                        id={id}
                      />
                    </div>
                    <img className="img" src={gallery[0]} alt="product-small" />
                  </article>
                );
              })}
            </div>
            <div className="cart__amount">
              <h2>Total</h2>
              <p>
                {readTotal} {symbol}
              </p>
            </div>
            <div className="cart__btns">
              <Link onClick={() => setCartModal(false)} to="/cart">
                <p>VIEW BAG</p>
              </Link>
              <p>CHECK OUT</p>
            </div>
          </Scroll>
        </article>
      </>
    );
  }
}
