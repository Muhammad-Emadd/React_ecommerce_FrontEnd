import { useAtom } from "jotai";
import React, { Component } from "react";
import { useQuery } from "react-query";
import {
  ProductAttributes,
  choosedCurrAtom,
  chosenProductAtom,
  setChosenAttributesAtom,
  toggleDialogAtom,
  resetCountAtom,
  resetCheckedAttributesAtom,
  getCardDetails,
  getData,
} from "./imports";
export default function ProductModal() {
  const [choosedCurr] = useAtom(choosedCurrAtom);
  const [chosenProduct] = useAtom(chosenProductAtom);
  const [, setChosenAttributes] = useAtom(setChosenAttributesAtom);
  const [, resetCheckedAttributes] = useAtom(resetCheckedAttributesAtom);
  const [toggleDialog, setToggleDialog] = useAtom(toggleDialogAtom);
  const [, resetCount] = useAtom(resetCountAtom);

  const { data, isLoading, error } = useQuery(
    ["chosen-product", chosenProduct],
    () => getData(getCardDetails(chosenProduct)),
    {
      // The query will not execute until the productId exists
      enabled: !!chosenProduct,
      useErrorBoundary: true,
    }
  );
  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  const { product } = data ? data : "";

  const writeReadAtoms = {
    choosedCurr,
    chosenProduct,
    toggleDialog,
    setChosenAttributes,
    setToggleDialog,
    resetCheckedAttributes,
    resetCount,
  };

  if (!toggleDialog) {
    return null;
  }
  return <ProductModalClass {...product} {...writeReadAtoms} />;
}

class ProductModalClass extends Component {
  constructor(props) {
    super(props);
    this.EscKey = this.EscKey.bind(this);
    this.closeModalClick = this.closeModalClick.bind(this);
    this.container = "container__card-list__containercard-back";
    this.modal = null;
    this.setModal = this.setModal.bind(this);
  }

  setModal = (element) => {
    this.modal = element;
  };

  closeModalClick = (e) => {
    const { setToggleDialog, resetCount, resetCheckedAttributes } = this.props;
    this.modal.close();
    resetCount();
    resetCheckedAttributes();
    setToggleDialog(false);
  };

  EscKey(event) {
    event.preventDefault();
  }
  componentDidMount() {
    const { toggleDialog } = this.props;
    if (toggleDialog && !this.modal.open) this.modal.showModal();
  }

  componentDidUpdate() {
    const { toggleDialog } = this.props;

    if (toggleDialog && !this.modal.open) this.modal.showModal();

    this.props.setChosenAttributes(this.props.attributes.length);
  }

  render() {
    const { name, gallery, prices, attributes, id } = this.props;
    const { symbol, label } = this.props.choosedCurr;

    return this.props.chosenProduct.length > 0 ? (
      <dialog
        onKeyDown={this.EscKey}
        ref={this.setModal}
        className={`${this.container}`}
      >
        <p itemType="button" onClick={this.closeModalClick} className="btn">
          <span className="icon-cross" />
        </p>
        <div className={`${this.container}__header`}>
          <div className={`${this.container}__header-text`}>
            <h1>{name}</h1>
            <br />
            <p>
              {symbol + " "}
              {
                prices.filter((price) => {
                  return price.currency.label === label;
                })[0].amount
              }
            </p>
          </div>
          <div className={`${this.container}__header-img`}>
            <img className="img" src={gallery[0]} alt="product-small" />
          </div>
        </div>
        <ProductAttributes attributes={attributes} id={id} />
      </dialog>
    ) : (
      ""
    );
  }
}
