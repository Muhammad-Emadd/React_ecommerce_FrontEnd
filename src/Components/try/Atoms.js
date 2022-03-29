import { atom } from "jotai";
import { atomWithQuery } from "jotai/query";
import { queryFn } from "../../GraphQL/Queries";
import { getData } from "./api";

export const categoryAtom = atom("all");
export const productsAtom = atom((get) => get(categoryAtom));
export const getProductsList = atomWithQuery((get) => ({
  queryKey: ["products-list", get(productsAtom)],
  queryFn: ({ queryKey: [, category] }) => getData(queryFn(category)),
}));
