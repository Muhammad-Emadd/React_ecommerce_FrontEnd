import React, { Component } from "react";
import { useAtom } from "jotai";
import {
  getCategoryAtom,
  readCategoryAtom,
  SetCategoryAtom,
} from "../Jotai/Atoms";

import { Link } from "react-router-dom";

export const Categories = () => {
  const [category] = useAtom(readCategoryAtom);
  const [, categorySet] = useAtom(SetCategoryAtom);
  const [categoriesList] = useAtom(getCategoryAtom);

  return (
    <CategoriesClass
      category={category}
      categorySet={categorySet}
      categoryList={categoriesList}
    />
  );
};

class CategoriesClass extends Component {
  render() {
    const { categorySet } = this.props;
    const { categories } = this.props.categoryList;

    return categories.map((objCategories, i) => {
      return (
        <Link key={i} to="/">
          <h3
            id={objCategories.name}
            className="navbar__categories-name"
            onClick={() => categorySet(objCategories.name)}
          >
            {objCategories.name.toUpperCase()}
          </h3>
        </Link>
      );
    });
  }
}
