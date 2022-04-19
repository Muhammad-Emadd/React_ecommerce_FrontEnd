import { atom, useAtom } from "jotai";
import React, { Component } from "react";
import {
  chosenProductAtom,
  countAtom,
  readCartAtom,
  readCheckedAttributesAtom,
  resetCheckedAttributesAtom,
  resetCountAtom,
  setCartAtom,
  setCountsAtom,
  toggleDialogAtom,
} from "../Jotai/Atoms";

export function AddButton({ attributes }) {
  const [checkedAttributes] = useAtom(readCheckedAttributesAtom);
  const [readcountAtom] = useAtom(countAtom);
  const [readCart] = useAtom(readCartAtom);
  const [chosenProductId] = useAtom(chosenProductAtom);
  const [, setToggleDialog] = useAtom(toggleDialogAtom);
  const [, resetCheckedAttributes] = useAtom(resetCheckedAttributesAtom);
  const [, setCart] = useAtom(setCartAtom);
  const [, setCounts] = useAtom(setCountsAtom);
  const [, resetCount] = useAtom(resetCountAtom);
  return (
    <AddButtonClass
      checkedAttributes={checkedAttributes}
      attributes={attributes}
      resetCheckedAttributes={resetCheckedAttributes}
      setCart={setCart}
      setToggleDialog={setToggleDialog}
      resetCount={resetCount}
      setCounts={setCounts}
      readcountAtom={readcountAtom}
      readCart={readCart}
      chosenProductId={chosenProductId}
    />
  );
}

class AddButtonClass extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }
  formSubmit() {
    const {
      setToggleDialog,
      resetCount,
      resetCheckedAttributes,
      setCart,
      setCounts,
      readcountAtom,
      checkedAttributes,
      attributes,
      readCart,
      chosenProductId,
    } = this.props;

    if (
      (!readCart.some((product) => product.id === chosenProductId) &&
        attributes &&
        checkedAttributes &&
        attributes.length > 0 &&
        attributes.length === checkedAttributes.length) ||
      attributes.length === 0
    ) {
      setCounts((prev) => [...prev, atom(readcountAtom)]);
      setCart();
      resetCount();
      resetCheckedAttributes();
      setToggleDialog(false);
    }
  }
  render() {
    return (
      <p onClick={this.formSubmit} type="submit" form="attributes-form">
        add to Cart
      </p>
    );
  }
}

export default AddButton;
