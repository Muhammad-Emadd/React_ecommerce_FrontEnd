import React, { Component } from "react";
import {
  getcurrencyAtom,
  readCurrAtom,
  SetCurrAtom,
  toggleCartModalAtom,
  toggleCurrencyMenuAtom,
} from "../jotaiStore/Atoms";
import { useAtom } from "jotai";

export const CurrenciesPanel = () => {
  const [currenciesList] = useAtom(getcurrencyAtom);
  const [, currSet] = useAtom(SetCurrAtom);
  const [curr] = useAtom(readCurrAtom);
  const [showCurrencyMenu, setCurrencyMenu] = useAtom(toggleCurrencyMenuAtom);
  const [showCartModal] = useAtom(toggleCartModalAtom);

  return (
    <>
      <CurrenciesPanelClass
        curr={curr}
        currSet={currSet}
        currenciesList={currenciesList}
        showCurrencyMenu={showCurrencyMenu}
        setCurrencyMenu={setCurrencyMenu}
        showCartModal={showCartModal}
      />
    </>
  );
};

export class CurrenciesPanelClass extends Component {
  constructor() {
    super();
    this.onToggleCurrMenu = this.onToggleCurrMenu.bind(this);
  }
  onChangeCurrency = (e) => {
    this.props.currSet(e.target.id.toUpperCase());
  };
  onToggleCurrMenu(e) {
    const { showCurrencyMenu, setCurrencyMenu, showCartModal } = this.props;
    !showCurrencyMenu && !showCartModal
      ? setCurrencyMenu(true)
      : setCurrencyMenu(false);
  }
  render() {
    const { currenciesList, showCurrencyMenu } = this.props;
    return (
      <>
        <div
          onClick={this.onToggleCurrMenu}
          className="navbar__actions-currency"
        >
          <div className="navbar__actions-currency-sign">
            <span>&#36;</span>
          </div>
          <span className={!showCurrencyMenu ? "arrow" : "arrow active"}>
            <span className="arrow-left" />
            <span className="arrow-right" />
          </span>
        </div>
        <div
          style={!showCurrencyMenu ? { display: "none" } : {}}
          className="currenciesPanel"
        >
          {currenciesList.currencies.map((objCurrency, i) => {
            return (
              <h3
                key={i}
                id={objCurrency.label.toUpperCase()}
                className="currenciesPanel__curriencies-name"
                onClick={this.onChangeCurrency}
              >
                {objCurrency.symbol} {objCurrency.label.toUpperCase()}
              </h3>
            );
          })}
        </div>
      </>
    );
  }
}
