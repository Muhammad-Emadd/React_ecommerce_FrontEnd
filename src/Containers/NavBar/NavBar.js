import React, { PureComponent } from "react";

import { logo, CartModal, CurrenciesPanel, Categories } from "./imports";

export class NavBar extends PureComponent {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="navbar__categories">
            <Categories />
          </div>
          <div className="navbar__logo">
            <img className="navbar__logo-img" src={logo} alt="logo" />
          </div>
          <div className="navbar__actions">
            <CurrenciesPanel />
            <CartModal />
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
