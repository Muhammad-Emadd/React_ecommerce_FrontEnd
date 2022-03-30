import React, { Component } from "react";
import { currAtom, defaultCurrAtom, getcurrencyAtom } from "../../jotai/Atoms";
import { useAtom } from "jotai";

export const CurrenciesPanel = () => {
  const [currenciesList] = useAtom(getcurrencyAtom);
  const [curr, currSet] = useAtom(currAtom);
  console.log(currenciesList);

  return (
    <>
      <CurrenciesPanelClass
        curr={curr}
        currSet={currSet}
        currenciesList={currenciesList}
      />
    </>
  );
};

export class CurrenciesPanelClass extends Component {
  onClickTry = (e) => {
    this.props.currSet(e.target.id.toUpperCase());
    console.log(e.target.id.toUpperCase());
  };

  render() {
    const { currenciesList } = this.props;
    console.log(currenciesList);

    return currenciesList.currencies.map((objCurrency, i) => {
      return (
        <h3
          key={i}
          id={objCurrency.label.toUpperCase()}
          className="currenciesPanel__curriencies-name"
          onClick={this.onClickTry}
        >
          {objCurrency.symbol} {objCurrency.label.toUpperCase()}
        </h3>
      );
    });
  }
}
