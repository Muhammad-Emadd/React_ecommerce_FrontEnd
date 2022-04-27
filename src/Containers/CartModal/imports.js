import Counter from "../../Components/Counter";
import Scroll from "../../Components/Scroll";
import { getCardDetails } from "../../GraphQL/Queries";
import { getData } from "../../Helpers/helpers";
import blackCart from "../../assets/blackCart.svg";
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
} from "../../jotaiStore/Atoms";

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
