import Counter from "../../Components/Counter";
import Scroll from "../../Components/Scroll";
import { getCardDetails } from "../../GraphQL/Queries";
import { getData } from "../../Helpers/helpers";
import blackCart from "../../Assets/blackCart.svg";
import {
  setCartAtom,
  CartLengthAtom,
  readCartAtom,
  choosedCurrAtom,
  countsAtom,
  readTotalAtom,
  toggleCartModalAtom,
  toggleCurrencyMenuAtom,
  deleteFromCartAtom,
} from "../../Jotai/Atoms";

export {
  blackCart,
  setCartAtom,
  CartLengthAtom,
  readCartAtom,
  choosedCurrAtom,
  countsAtom,
  readTotalAtom,
  toggleCartModalAtom,
  toggleCurrencyMenuAtom,
  deleteFromCartAtom,
  Counter,
  Scroll,
  getCardDetails,
  getData,
};
