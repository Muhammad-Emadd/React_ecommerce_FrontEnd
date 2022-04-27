import Counter from "../../Components/Counter";
import ImageCarousel from "../../Components/ImageCarousel";
import { getCardDetails } from "../../GraphQL/Queries";
import { getData } from "../../Helpers/helpers";
import {
  setCartAtom,
  readCartAtom,
  choosedCurrAtom,
  countsAtom,
  readTotalAtom,
  deleteFromCartAtom,
} from "../../jotaiStore/Atoms";

export {
  choosedCurrAtom,
  setCartAtom,
  readCartAtom,
  countsAtom,
  readTotalAtom,
  deleteFromCartAtom,
  ImageCarousel,
  Counter,
  getCardDetails,
  getData,
};
