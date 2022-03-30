import { atom } from "jotai";
import { atomWithQuery } from "jotai/query";
import { CURRENCIES_LABEL, queryFn } from "../GraphQL/Queries";
import { getData } from "./helpers";

export const categoryAtom = atom("all");
export const productsAtom = atom((get) => get(categoryAtom));
export const getProductsList = atomWithQuery((get) => ({
  queryKey: ["products-list", get(productsAtom)],
  queryFn: ({ queryKey: [, category] }) => getData(queryFn(category)),
}));
export const getcurrencyAtom = atomWithQuery((get) => ({
  queryKey: ["currency"],
  queryFn: () => getData(CURRENCIES_LABEL),
}));

export const defaultCurrAtom = atom(
  (get) => get(getcurrencyAtom).currencies[0]
);

export const currAtom = atom("");
export const choosedCurrAtom = atom((get) =>
  get(currAtom).length > 0
    ? get(getcurrencyAtom).currencies.filter((currObj) => {
        console.log(currObj, currObj.label === get(currAtom));

        return currObj.label === get(currAtom);
      })[0]
    : get(defaultCurrAtom)
);
// productsList.category.products.prices;
