import { useAtom } from "jotai";
import React, { Component } from "react";
import { useQuery } from "react-query";
import {
  choosedCurrAtom,
  getCardDetails,
  getData,
  chosenProductAtom,
  readCheckedAttributesAtom,
  resetCheckedAttributesAtom,
  setCheckedAttributesAtom,
  AddButton,
  ProductCounter,
  Scroll,
} from "./imports";
export function ProductPage() {
  const [chosenProduct] = useAtom(chosenProductAtom);
  const [choosedCurr] = useAtom(choosedCurrAtom);
  const [checkedAttributes] = useAtom(readCheckedAttributesAtom);
  const [, setCheckedAttributes] = useAtom(setCheckedAttributesAtom);
  const [, resetCheckedAttributes] = useAtom(resetCheckedAttributesAtom);

  const { data, isLoading, error } = useQuery(
    ["chosen-product", chosenProduct],
    () => getData(getCardDetails(chosenProduct)),
    {
      enabled: !!chosenProduct,
      useErrorBoundary: true,
    }
  );
  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  const { product } = data ? data : "";
  return (
    <ProductPageClass
      {...product}
      choosedCurr={choosedCurr}
      checkedAttributes={checkedAttributes}
      setCheckedAttributes={setCheckedAttributes}
      resetCheckedAttributes={resetCheckedAttributes}
    />
  );
}

class ProductPageClass extends Component {
  constructor() {
    super();
    this.descriptionDiv = null;
    this.mainImg = null;
    this.state = {
      mainImg: "",
    };
    this.viewImg = this.viewImg.bind(this);
    this.onCheckingAttributes = this.onCheckingAttributes.bind(this);
  }
  setDescriptionDiv = (element) => {
    this.descriptionDiv = element;
  };
  onCheckingAttributes(e) {
    const { name, value } = e.target;
    const { setCheckedAttributes, checkedAttributes } = this.props;
    setCheckedAttributes({ name, value });
  }

  viewImg = (event) => {
    if (event.target.src?.length) this.setState({ mainImg: event.target.src });
  };

  componentDidMount() {
    const { description, gallery, resetCheckedAttributes } = this.props;
    this.descriptionDiv.insertAdjacentHTML("afterbegin", description);
    if (this.state.mainImg.length === 0) this.setState({ mainImg: gallery[0] });
    resetCheckedAttributes();
  }
  render() {
    const { gallery, attributes, name, prices, id } = this.props;
    const { symbol, label } = this.props.choosedCurr;
    const price = prices
      ? prices.filter((price) => {
          return price.currency.label === label;
        })[0].amount
      : "";

    return (
      <section className="product-page">
        <Scroll maxHeight="50vh">
          <article className="product-page__images">
            {gallery.map((img, i) => {
              return (
                <div
                  onClick={this.viewImg}
                  key={i}
                  className="product-page__images-img"
                >
                  <img className="img" src={img} alt="product-gallery" />
                </div>
              );
            })}
          </article>
        </Scroll>
        <div className="product-page__product-info">
          <div className="product-page__product-info__main-img">
            <img
              src={this.state.mainImg}
              alt="product-gallery"
              className="img"
            />
          </div>
          <article className="product-page__product-info__main-info">
            <h2>{name}</h2>
            <div style={{ fontSize: "80%" }} className="all-attr">
              {attributes.length > 0
                ? attributes.map(({ name, type, items }, ind) => {
                    return (
                      <fieldset
                        key={ind}
                        className={`all-attr-${type}__items`}
                        form="attributes-form"
                        onChange={this.onCheckingAttributes}
                      >
                        <legend>{name}</legend>

                        {items.map((item, i) => {
                          return (
                            <label key={i}>
                              <input
                                type="radio"
                                value={item.value}
                                name={name}
                              />
                              <span
                                className={`all-attr-${type}__items-${name}`}
                                style={
                                  type === "swatch"
                                    ? {
                                        backgroundColor: item.value,
                                      }
                                    : {}
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
            <div className="product-page__product-info__main-info__price">
              <p>PRICE</p>
              <p>
                {symbol} {price}
              </p>
            </div>
            <div className="product-page__product-info__main-info__addbtn">
              <AddButton attributes={attributes} />
            </div>
            <ProductCounter />
            <Scroll maxHeight="15em">
              <div
                style={{ fontSize: "130%" }}
                ref={this.setDescriptionDiv}
                className="product-page__product-info__main-info__describtion"
              />
            </Scroll>
          </article>
        </div>
      </section>
    );
  }
}

export default ProductPage;
