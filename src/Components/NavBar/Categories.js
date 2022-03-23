import { Query } from "@apollo/client/react/components";
import React, { Component } from "react";
import { CATEGORIES } from "../../GraphQL/Queries";

export class Categories extends Component {
  displayCategories = ({ loading, error, data }) => {
    return error
      ? "error"
      : loading
      ? "loading"
      : data.categories.map((objCategories, i) => {
          return (
            <h3
              key={i}
              value={objCategories.name.toUpperCase()}
              className="navbar__categories-name"
            >
              {objCategories.name.toUpperCase()}
            </h3>
          );
        });
  };

  render() {
    return <Query query={CATEGORIES}>{this.displayCategories}</Query>;
  }
}

export default Categories;
