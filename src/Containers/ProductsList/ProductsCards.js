import React from "react";
import { useAtom } from "jotai";
import {
  choosedCurrAtom,
  toggleDialogAtom,
  getProductsListAtom,
  setIdAtom,
  ProductsCardsFront,
} from "./imports";

export function ProductsCards() {
  const [, setEditId] = useAtom(setIdAtom);
  const [, setToggleDialog] = useAtom(toggleDialogAtom);
  const [toggleDialog] = useAtom(toggleDialogAtom);
  const [productsList] = useAtom(getProductsListAtom);
  const [choosedCurr] = useAtom(choosedCurrAtom);
  const { products } = productsList.category;

  return (
    <>
      {products.map((product, i) => {
        return (
          <div
            className="container__card-list__containercard"
            id={product.id}
            key={i}
          >
            <ProductsCardsFront
              toggleDialog={toggleDialog}
              choosedCurr={choosedCurr}
              productData={product}
              setEditId={setEditId}
              setToggleDialog={setToggleDialog}
            />
          </div>
        );
      })}
    </>
  );
}
