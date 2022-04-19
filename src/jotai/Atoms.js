import { atom } from "jotai";
import { atomWithQuery } from "jotai/query";
import { CURRENCIES_LABEL, queryFn, GET_CATEGORIES } from "../GraphQL/Queries";
import { getData } from "../Helpers/helpers";
import { atomWithToggle } from "../Helpers/helpers";

// Fetching data from BE

export const getCategoryAtom = atomWithQuery((get) => ({
  queryKey: ["Category"],
  queryFn: () => getData(GET_CATEGORIES),
}));

export const getcurrencyAtom = atomWithQuery((get) => ({
  queryKey: ["currency"],
  queryFn: () => getData(CURRENCIES_LABEL),
}));

// based on the choosed Category we fetch the data
export const getProductsListAtom = atomWithQuery((get) => ({
  queryKey: ["products-list", get(choosedCategoryAtom)],
  queryFn: ({ queryKey: [, category] }) =>
    getData(queryFn(get(choosedCategoryAtom))),
}));

// category Atoms

const categoryAtom = atom("");
const defaultCategoryAtom = atom(
  (get) => get(getCategoryAtom).categories[0].name
);
export const SetCategoryAtom = atom(null, (_get, set, update) => {
  set(categoryAtom, update);
});
export const readCategoryAtom = atom((get) => get(categoryAtom));
export const choosedCategoryAtom = atom((get) =>
  get(categoryAtom).length > 0
    ? get(getCategoryAtom).categories.filter(
        (category) => category.name === get(categoryAtom)
      )[0].name
    : get(defaultCategoryAtom)
);

// currency Atoms

const defaultCurrAtom = atom((get) => get(getcurrencyAtom).currencies[0]);
const currAtom = atom("");
export const SetCurrAtom = atom(null, (_get, set, update) => {
  set(currAtom, update);
});
export const readCurrAtom = atom((get) => get(currAtom));

export const choosedCurrAtom = atom((get) =>
  get(currAtom).length > 0
    ? get(getcurrencyAtom).currencies.filter((currObj) => {
        return currObj.label === get(currAtom);
      })[0]
    : get(defaultCurrAtom)
);

// choosing product ID to fetch it

export const editIdAtom = atom("");
export const chosenProductAtom = atom((get) => get(editIdAtom));
export const setIdAtom = atom(null, (get, set, update) => {
  // `update` is any product-id we receive for updating this atom
  set(editIdAtom, update);
});

// Checked Attributes Atoms

const productAttributesLengthAtom = atom("");
export const setChosenAttributesAtom = atom(null, (get, set, update) => {
  // `update` is any Attribute the user check
  set(productAttributesLengthAtom, update);
});

export const readChosenAttributesAtom = atom((get) =>
  get(productAttributesLengthAtom)
);

const CheckedAttributesAtom = atom([]);

export const setCheckedAttributesAtom = atom(null, (get, set, update) => {
  set(CheckedAttributesAtom, [
    ...get(CheckedAttributesAtom).filter((attr) => attr.name !== update.name),
    update,
  ]);
});
export const readCheckedAttributesAtom = atom((get) =>
  get(CheckedAttributesAtom)
);
export const resetCheckedAttributesAtom = atom(null, (get, set) => {
  set(CheckedAttributesAtom, []);
});

//  pop-up Counter atom

const reducer = atom(1);
export const countAtom = atom((get) => get(reducer)); // read only
export const incAtom = atom(null, (_get, set) => {
  set(reducer, (prev) => prev + 1);
});
export const decAtom = atom(null, (_get, set) => {
  set(reducer, (prev) => {
    return prev - 1 < 1 ? 1 : prev - 1;
  });
});
export const resetCountAtom = atom(null, (_get, set) => {
  set(reducer, 1);
});

//                      Cart data atoms
const cartAtom = atom([]);
export const readCartAtom = atom((get) => get(cartAtom));
export const CartLengthAtom = atom((get) => get(cartAtom).length);

export const setCartAtom = atom(null, (get, set) => {
  set(cartAtom, [
    ...get(cartAtom),
    {
      id: get(chosenProductAtom),
      attributes: get(readCheckedAttributesAtom),
      amount: get(countAtom),
    },
  ]);
});
export const deleteFromCartAtom = atom(null, (get, set, update) => {
  // `update` is object contains product-id and atom-key
  set(cartAtom, [
    ...get(cartAtom).filter((product) => product.id !== update.id),
  ]);
  set(totalAtom, [
    ...get(totalAtom).filter((product) => product.id !== update.id),
  ]);
  set(countsAtom, [
    ...get(countsAtom).filter((atom, i) => atom.toString() !== update.i),
  ]);
});

// creating atoms in atom array to reduce rerenders in the cart page and modal

export const countsAtom = atom([]);
export const setCountsAtom = atom(null, (get, set, update) =>
  set(countsAtom, update)
);

// total amount atoms
export const totalAtom = atom([]);
export const readTotalAtom = atom((get) =>
  get(totalAtom)
    .map((prod) => prod.charge)
    .reduce((total, num) => total + num, 0)
    .toFixed(2)
);
export const setTotalAtom = atom(null, (get, set, update) => {
  set(totalAtom, [
    ...get(totalAtom).filter((total) => total.id !== update.id),
    update,
  ]);
});

//  Product pop-up & Currency modal & Cart modal togggle View Atoms

export const toggleDialogAtom = atomWithToggle(false);
export const toggleCartModalAtom = atomWithToggle(false);
export const toggleCurrencyMenuAtom = atomWithToggle(false);
