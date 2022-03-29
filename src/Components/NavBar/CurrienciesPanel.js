import React, { Component } from "react";
import { getData, Query } from "../try/api";
import { CURRENCIES_LABEL } from "../../GraphQL/Queries";

export class CurrenciesPanel extends Component {
  onClickTry = (e) => {
    console.log(e.target.id);
  };
  handledata = (data) => {
    console.log(data);

    return data.currencies.map((objCurrency, i) => {
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
  };
  displayCategories = ({ data, isLoading }) => {
    return isLoading ? <h1>Loading</h1> : this.handledata(data);
  };
  render() {
    return (
      <Query keyName="example3" fn={() => getData(CURRENCIES_LABEL)}>
        {this.displayCategories}
      </Query>
    );
  }
}

export default CurrenciesPanel;
