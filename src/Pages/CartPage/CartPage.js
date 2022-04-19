import { useAtom } from "jotai";
import React, { Component } from "react";
import { useQueries } from "react-query";
import {
  choosedCurrAtom,
  setCartAtom,
  readCartAtom,
  countsAtom,
  readTotalAtom,
  deleteFromCartAtom,
  ImageCarousel,
  Counter,
  getCardDetails,
  getData,
} from "./imports";
export function CartPage() {
  const [counts] = useAtom(countsAtom);
  const [readCart] = useAtom(readCartAtom);
  const [, setCart] = useAtom(setCartAtom);
  const [, deleteFromCart] = useAtom(deleteFromCartAtom);
  const [choosedCurr] = useAtom(choosedCurrAtom);
  const [readTotal] = useAtom(readTotalAtom);

  const productQueries = useQueries(
    readCart.map((product) => {
      return product
        ? {
            queryKey: ["product", product.id],
            queryFn: () => getData(getCardDetails(product.id)),
          }
        : "";
    })
  );

  const readWriteAtoms = {
    readCart,
    choosedCurr,
    counts,
    readTotal,
    setCart,
    deleteFromCart,
  };

  return <CartPageClass {...readWriteAtoms} productQueries={productQueries} />;
}

class CartPageClass extends Component {
  render() {
    const { counts, readCart, readTotal, deleteFromCart } = this.props;

    const { symbol, label } = this.props.choosedCurr;
    return (
      <div className="ccart">
        <div className="ccart__header">
          <h2>
            <strong>CART</strong>
          </h2>
        </div>
        <div className="ccart__product">
          {this.props.productQueries.map((product, ind) => {
            if (product.isLoading) return "Loading...";
            if (product.error) return <pre>{product.error.message}</pre>;
            const { name, gallery, prices, attributes, id } =
              product.data.product;
            const price = prices.filter((price) => {
              return price.currency.label === label;
            })[0].amount;
            const [checkedAttr] = readCart.filter(
              (product) => product.id === id
            );

            return (
              <article key={ind} className="ccart__product-cart__cart-menu">
                <button
                  className="delete-product"
                  onClick={() =>
                    deleteFromCart({ id, i: counts[ind].toString() })
                  }
                  button="delete"
                >
                  &#10007;
                </button>
                <div className="ccart__product-cart__cart-menu__card1">
                  <h3>{name}</h3>
                  <p>
                    {symbol} {price}
                  </p>
                  <div className="ccart__product-cart__cart-menu__card1__attributes">
                    {attributes.length > 0
                      ? attributes.map(({ name, type, items }, i) => {
                          return (
                            <fieldset
                              key={i}
                              className={`ccart__product-cart__cart-menu__card1__attributes-${type}__items`}
                              form="attributes-form"
                            >
                              <legend>{name}</legend>

                              {items.map((item, i) => {
                                const attribute = checkedAttr.attributes.filter(
                                  (attr) => attr.name === name
                                )[0];

                                return (
                                  <label key={i}>
                                    <span
                                      className={
                                        attribute.value === item.value &&
                                        type === "swatch"
                                          ? `${type}__items-${name} checked-swatch`
                                          : attribute.value === item.value &&
                                            type === "text"
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
                <div className="ccart__product-cart__cart-menu__pieces-btn">
                  <Counter
                    countAtom={counts[ind]}
                    key={counts[ind].toString()}
                    amount={readCart[ind].amount}
                    price={price}
                    id={id}
                  />
                </div>
                <ImageCarousel
                  gallery={gallery}
                  imagesLength={gallery.length}
                />
              </article>
            );
          })}
        </div>
        <div className="ccart__amount">
          <h2>Total</h2>
          <p>
            {readTotal} {symbol}
          </p>
        </div>
      </div>
    );
  }
}
export default CartPage;
