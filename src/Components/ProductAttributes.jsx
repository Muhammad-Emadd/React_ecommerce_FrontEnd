import { useAtom } from "jotai";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  setCheckedAttributesAtom,
  toggleDialogAtom,
  resetCountAtom,
  resetCheckedAttributesAtom,
  readCheckedAttributesAtom,
  chosenProductAtom,
} from "../Jotai/Atoms";
import AddButton from "./AddButton";
import ProductCounter from "./ProductCounter";

export default function ProductAttributes({ attributes }) {
  const [id] = useAtom(chosenProductAtom);
  const [checkedAttributes] = useAtom(readCheckedAttributesAtom);
  const [toggleDialog, setToggleDialog] = useAtom(toggleDialogAtom);
  const [, setCheckedAttributes] = useAtom(setCheckedAttributesAtom);
  const [, resetCheckedAttributes] = useAtom(resetCheckedAttributesAtom);
  const [, resetCount] = useAtom(resetCountAtom);

  return (
    <ProductAttributesClass
      id={id}
      toggleDialog={toggleDialog}
      checkedAttributes={checkedAttributes}
      attributes={attributes}
      setCheckedAttributes={setCheckedAttributes}
      setToggleDialog={setToggleDialog}
      resetCheckedAttributes={resetCheckedAttributes}
      resetCount={resetCount}
    />
  );
}

class ProductAttributesClass extends Component {
  constructor(props) {
    super(props);
    this.onCheckingAttributes = this.onCheckingAttributes.bind(this);
    this.container = "container__card-list__containercard-back";
  }
  onCheckingAttributes(e) {
    const { name, value } = e.target;
    const { setCheckedAttributes, checkedAttributes } = this.props;
    setCheckedAttributes({ name, value });
  }
  componentDidMount() {
    const { resetCount, resetCheckedAttributes } = this.props;
    resetCount();
    resetCheckedAttributes();
  }
  render() {
    const { attributes, id, setToggleDialog } = this.props;
    return (
      <>
        <form
          method="dialog"
          className={`${this.container}__all-attr`}
          id="attributes-form"
        >
          {attributes.length > 0
            ? attributes.map(({ name, type, items }, i) => {
                return (
                  <div
                    key={i}
                    className={`${this.container}__all-attr-${type}`}
                  >
                    <fieldset
                      className={`${this.container}__all-attr-${type}__items`}
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
                              className={`${type}__items-${name}`}
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
                  </div>
                );
              })
            : ""}
        </form>
        <ProductCounter />
        <div className={`${this.container}__btns`}>
          <Link to={`/Products/${id}`} onClick={() => setToggleDialog(false)}>
            <p>Details</p>
          </Link>
          <AddButton attributes={attributes} />
        </div>
      </>
    );
  }
}
