import { useQuery } from "react-query";
import React, { Component } from "react";
import { getData } from "../try/api";
import { GET_CATEGORIES } from "../../GraphQL/Queries";
import { useAtom } from "jotai";
import { categoryAtom } from "../try/Atoms";

export const Categories2 = () => {
  const [category, categorySet] = useAtom(categoryAtom);
  const { data, isLoading, isError } = useQuery("category-list", () =>
    getData(GET_CATEGORIES)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError || data == null) return <div>ERR!</div>;

  return (
    <Categories
      category={category}
      categorySet={categorySet}
      categoryList={data}
    />
  );
};

class Categories extends Component {
  onClick = (e) => {
    this.props.categorySet(e.target.id.toLowerCase());
  };
  displayCategories = () => {
    const { categories } = this.props.categoryList;

    return categories.map((objCategories, i) => {
      return (
        <h3
          key={i}
          id={objCategories.name}
          className="navbar__categories-name"
          onClick={this.onClick}
        >
          {objCategories.name.toUpperCase()}
        </h3>
      );
    });
  };

  render() {
    return this.displayCategories();
  }
}
