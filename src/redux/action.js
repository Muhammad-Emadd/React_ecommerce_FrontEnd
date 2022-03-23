// export const UPDATE_BREADCRUMBS = "UPDATE_BREADCRUMBS";
export const FILTER_PRODICTS = "FILTER_PRODICTS";

export const filterProducts = (products, category) => (dispatch) => {
  return dispatch({
    type: FILTER_PRODICTS,
    payload: {
      category,
      items:
        category === "all"
          ? products
          : products.filter((product) => {
              product.category;
            }),
    },
  });
};

// export const toggleBreadcrumbs = (areBreadcrumbsVisible) => ({
//   type: TOGGLE_BREADCRUMBS,
//   areBreadcrumbsVisible,
// });
