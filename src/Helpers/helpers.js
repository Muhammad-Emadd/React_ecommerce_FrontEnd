import { useQuery } from "react-query";
import { atom } from "jotai";
export const BASE_URL = "http://localhost:4000/";

export function Query(props) {
  return props.children(useQuery(props.keyName, props.fn, props.options));
}

export const getData = async (QUERY_TEMPLATE, variables = {}) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_TEMPLATE,
      }),
      variables: variables,
    });
    const data = await res.json();

    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export function atomWithToggle(initialValue) {
  const anAtom = atom(initialValue, (get, set, nextValue) => {
    const update = nextValue ?? !get(anAtom);
    set(anAtom, update);
  });

  return anAtom;
}
