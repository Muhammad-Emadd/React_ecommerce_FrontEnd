import { useAtom } from "jotai";
import React, { Component } from "react";
import { categoryAtom } from "../../jotai/Atoms";
import { ProductsCards } from "../../Components/Products/Products";

export const BodyFn = () => {
  const [category] = useAtom(categoryAtom);
  return (
    <>
      <Body categoryName={category} />
    </>
  );
};
export class Body extends Component {
  render() {
    return (
      <section className="container">
        <header className="container__category-name">
          <h1>{this.props.categoryName}</h1>
        </header>
        <section className="container__card-list">
          <ProductsCards />
        </section>
        <div className="overlay"></div>
      </section>
    );
  }
}

export default Body;
