import { useAtom } from "jotai";
import React, { Component } from "react";
import { ProductModal, ProductsCards, choosedCategoryAtom } from "./imports";
export const Main = () => {
  const [category] = useAtom(choosedCategoryAtom);

  return (
    <>
      <MainClass categoryName={category} />
    </>
  );
};
export class MainClass extends Component {
  render() {
    return (
      <>
        <section className="container">
          <header className="container__category-name">
            <h1>{this.props.categoryName}</h1>
          </header>
          <section className="container__card-list">
            <ProductsCards />
            <ProductModal />
          </section>
        </section>
      </>
    );
  }
}

export default Main;
